const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/recursive_coders_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection failed:', error));

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    college: String,
    degree: String,
    yop: String,
    course: String,
    enrolledAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', StudentSchema);

app.post('/api/enroll', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json({ message: 'Enrollment saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const DemoRequest = mongoose.model('DemoRequest', new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    college: String,
    degree: String,
    yop: String,
    requestedAt: { type: Date, default: Date.now }
}));

app.post('/api/demo', async (req, res) => {
    try {
        await new DemoRequest(req.body).save();
        res.status(201).json({ message: 'Demo request saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const Subscriber = mongoose.model('Subscriber', new mongoose.Schema({
    email: { type: String, required: true },
    subscribedAt: { type: Date, default: Date.now }
}));

app.post('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });
        await new Subscriber({ email }).save();
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});