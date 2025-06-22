const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const gameRoutes = require('./routes/gameRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/game', gameRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
  

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
