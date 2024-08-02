import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { description } = req.body;

    try {
      const response = await axios.post(
        'https://us-central1-chatbot-b81d7.cloudfunctions.net/getOpenAIResponse',
        {
          prompt: description,
          max_tokens: 150,
          model: 'gpt-3.5-turbo'
        },
        {
          headers: {
            'Authorization': `Bearer AIzaSyD4hzjIzreeTCij_hPDaIqjJBGPv2Iaazs`
          }
        }
      );
      res.status(200).json({ text: response.data.choices[0].text });
    } catch (error) {
      console.log("Error communicating with OpenAI:", error);
      res.status(500).json({ message: 'Error communicating with OpenAI' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
