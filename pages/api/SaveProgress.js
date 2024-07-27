import { connectMongodb } from "../../lib/Mongodbconnect/config";
import cardSchema from "../../app/Modals/problemaddSchma";

connectMongodb();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cardId, currentStep, leader, names, description } = req.body;

    try {
      const updatedCard = await cardSchema.findByIdAndUpdate(
        cardId,
        {
          currentStep,
          leader,
          names,
          description
        },
        { new: true }
      );

      res.status(200).json({ message: 'Progress saved successfully', updatedCard });
    } catch (err) {
      console.log('Error saving data', err);
      res.status(500).json({ message: 'Error saving progress' });
    }
  } else if (req.method === 'GET') {
    const { cardId } = req.query;

    try {
      const card = await cardSchema.findById(cardId);

      if (card) {
        res.status(200).json(card);
      } else {
        res.status(404).json({ message: 'Card not found' });
      }
    } catch (err) {
      console.log('Error fetching card data', err);
      res.status(500).json({ message: 'Error fetching card data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
