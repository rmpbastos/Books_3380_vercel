const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = "mongodb+srv://finaluser:DZNSGYJNFP6gBeLl@cluster0.7rlxnxb.mongodb.net/finalPractice";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

//Routes
const bookRouter = require('./routes/books');

app.use('/books', bookRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});