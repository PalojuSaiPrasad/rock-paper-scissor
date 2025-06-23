const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
// ✅ Routes NEXT
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
// ✅ Middlewares FIRST
app.use(cors({
  origin: 'https://rock-paper-scissor-2ph08g22c-nageswararao198s-projects.vercel.app/',
  credentials: true,
}));

app.use(express.json()); // ✅ Body parser must come before routes



app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);

// ✅ DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

