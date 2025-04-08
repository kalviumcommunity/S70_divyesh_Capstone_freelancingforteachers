const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');



dotenv.config();


app.use(cors());
app.use(express.json());
app.use("/api/users", require("./routes/user"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));



app.listen(5000, () => {
  console.log('Server running on port 5000');
});
