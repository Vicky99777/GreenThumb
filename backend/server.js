const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const plantRoutes = require('./routes/plants');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://saivikas774:IYN8ChaMBHScQj0u@greenthumb.wbll1.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'));

app.use('/api/plants', plantRoutes);

app.listen(3696, () => console.log(`Server running on 3696`));
