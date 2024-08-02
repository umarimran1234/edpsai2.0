import { connectMongodb } from '../../lib/Mongodbconnect/config';
import userModal from '../../app/Modals/modals'; // Adjust path as per your file structure
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    await connectMongodb(); // Connect to MongoDB

    // Find user by email
    const user = await userModal.findOne( {email} );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Log the user object to check its structure


    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
         
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if user._id exists
    if (!user._id) {
      console.error('User ID not found:', user);
      return res.status(500).json({ message: 'User ID not found' });
    }
 
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h' // Token expires in 1 hour
    });

    res.status(200).json({ token , userId: user._id });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
