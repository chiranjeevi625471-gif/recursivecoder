const mongoose = require('mongoose');
const { connectToDatabase } = require('../lib/mongodb');

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
const Student = mongoose.models.Student || mongoose.model('Student', StudentSchema);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
        return res.status(400).json({ error: 'A JSON request body is required' });
    }

    try {
        await connectToDatabase();
        await new Student(req.body).save();
        return res.status(201).json({ message: 'Enrollment saved' });
    } catch (error) {
        console.error('Enrollment request failed:', error);
        const status = error.code === 'MISSING_MONGODB_URI' ? 503 : 500;
        const message = status === 503
            ? 'Enrollment storage is not configured. Set MONGODB_URI in Vercel.'
            : 'Enrollment could not be saved. Please try again later.';
        return res.status(status).json({ error: message });
    }
};