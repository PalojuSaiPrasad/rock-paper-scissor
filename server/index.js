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
  origin: 'http://localhost:3000',
  credentials: true
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
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
