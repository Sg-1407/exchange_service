const express = require('express');
const router = express.Router();
const ExchangeRequest = require('../models/ExchangeRequest');

// Create an exchange request
router.post('/', async (req, res) => {
  try {
    const { lender_id, borrower_id, book_id, exchange_id, status } = req.body;

    const newRequest = await ExchangeRequest.create({
      lender_id,
      borrower_id,
      book_id,
      exchange_id,
      status,
    });

    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// List all exchange requests for a borrower
router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;

    const requests = await ExchangeRequest.findAll({
      where: { borrower_id: user_id },
    });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Edit an exchange request
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRequest = await ExchangeRequest.update(req.body, {
      where: { id },
    });

    if (!updatedRequest[0]) {
      return res.status(404).json({ message: 'Exchange request not found' });
    }

    res.status(200).json({ message: 'Exchange request updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an exchange request
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRequest = await ExchangeRequest.destroy({
      where: { id },
    });

    if (!deletedRequest) {
      return res.status(404).json({ message: 'Exchange request not found' });
    }

    res.status(200).json({ message: 'Exchange request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
