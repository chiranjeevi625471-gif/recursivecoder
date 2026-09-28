// Demo Request Schema for demo registrations
const DemoRequestSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    college: String,
    degree: String,
    yop: String,
    requestedAt: { type: Date, default: Date.now }
});
const DemoRequest = mongoose.model('DemoRequest', DemoRequestSchema);

// API Route to Register for Demo
app.post('/api/demo', async (req, res) => {
    try {
        const newDemo = new DemoRequest(req.body);
        await newDemo.save();
        console.log(`New Demo Request: ${req.body.name} (${req.body.email})`);
        res.status(201).json({ message: 'Demo request saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Subscriber Schema for newsletter
const SubscriberSchema = new mongoose.Schema({
    email: { type: String, required: true },
    subscribedAt: { type: Date, default: Date.now }
});
const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// API Route to Subscribe (Newsletter)
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        console.log(`New Subscriber: ${email}`);
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
// Make sure MongoDB is running locally or use your Atlas connection string
mongoose.connect('mongodb://127.0.0.1:27017/recursive_coders_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Schema Definition
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String, // Added email to schema
    phone: String,
    college: String,
    degree: String,
    yop: String,
    course: String,
    enrolledAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', StudentSchema);

// API Route to Enroll
app.post('/api/enroll', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        console.log(`New Enrollment: ${req.body.name} (${req.body.email}) for ${req.body.course}`);
        res.status(201).json({ message: 'Enrollment Saved' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});