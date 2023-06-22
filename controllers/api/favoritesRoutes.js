const express = require('express');
const router = express.Router();
const { Favorites } = require("../../models/Favorites");
const { User } = require('../../models/User');


// Add a favorite
router.post('/favorites', async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const favorite = await Favorites.create({ userId, movieId });
    res.json(favorite);
    res.render('favorites');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Remove a favorite
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Favorites.destroy({ where: { id } });
    res.json({ message: 'Favorite removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error, unable to delete!' });
  }
});

// Get user's favorites
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const favorites = await Favorites.findAll({
      where: { userId },
      include: [User, Movie], // Include associated User and Movie models
    });
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
