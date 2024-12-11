const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 5000

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:Ahmad5568@@cluster0.ncheo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define the Question Schema
const questionSchema = new mongoose.Schema({
    question: String,
    optiona: String,
    optionb: String,
    optionc: String,
    optiond: String,
    correctAnswer: String,
});

const Question = mongoose.model('Question', questionSchema);

// API Endpoints
app.get('/api/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).send(err.message);
    }
});




app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});




app.post('/api/questions', async (req, res) => {
    try {
        const question = new Question(req.body);
        await question.save();
        res.status(201).send("Question Added");
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running ${port}`);
});
