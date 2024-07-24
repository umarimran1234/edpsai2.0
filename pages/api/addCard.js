import cardSchema from '../../app/Modals/problemaddSchma'
import { connectMongodb } from '../../lib/Mongodbconnect/config'
import nodemailer from 'nodemailer';
import { finduserbyemail } from './userUtilitis';
import { v4 as uuid } from 'uuid';

export default async function handler(req, res) {
  await connectMongodb();

  if (req.method !== "POST") {
    res.status(405).send({ msg: 'Only POST requests are allowed' });
    return;
  }

  const { userId, ProjectName, DescribProblem, imgUrl, Contributers } = req.body;

  let conntrubutersid = [];
  for (const email of Contributers) {
    const userId = await finduserbyemail(email);
    if (userId) {
      conntrubutersid.push(userId);
    }
  }

  try {
    const invitation = Contributers.map(email => {
      const token = uuid();
      return {
        email,
        token,
        tokenExpireAT: new Date(Date.now() + 60 * 60 * 1000)
      }
    });

    const newPoblemCard = new cardSchema({
      userId,
      ProjectName,
      DescribProblem,
      imgUrl,
      Contributers: conntrubutersid,
      invitation,
    });

    const savData = await newPoblemCard.save();
    res.status(201).json({ savData });

    const transport = nodemailer.createTransport({
      host: ' ',
      port: 587,
      auth: {
        user: 'thora83@ethereal.email',
        pass: 'bS4qnjrqQpXF8qnDK3'
      }
    });

    for (const inv of invitation) {
      const mailOptions = {
        from: 'thora83@ethereal.email',
        to: inv.email,
        subject: 'You have been added as a contributor',
        text: `You have been added as a contributor to the project: ${ProjectName}. Click the following link to accept: ${process.env.APP_URL}/accept-invitation/${savData._id}/token/${inv.token}`,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    }
  } catch (err) {
    console.log('Error:', err);
    res.status(400).json({ err: err.message });
  }
}
