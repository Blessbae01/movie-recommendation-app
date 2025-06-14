// routes/movieRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Search movies by title
router.get('/search', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: 'Please provide a search term' });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: TMDB_API_KEY,
          query,
        },
      }
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
});

module.exports = router;
