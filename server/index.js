// server/index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);


app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// 🔌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
