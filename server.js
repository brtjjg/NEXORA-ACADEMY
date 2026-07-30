const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API Routes for user data persistence (optional - uses localStorage on client side)
// These are for future expansion with database

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/computer-packages', (req, res) => {
    res.sendFile(path.join(__dirname, 'computer-packages.html'));
});

app.get('/web-design', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-design.html'));
});

app.get('/python', (req, res) => {
    res.sendFile(path.join(__dirname, 'python.html'));
});

app.get('/graphic-design', (req, res) => {
    res.sendFile(path.join(__dirname, 'graphic-design.html'));
});

app.get('/digital-marketing', (req, res) => {
    res.sendFile(path.join(__dirname, 'digital-marketing.html'));
});

app.get('/ai-ml', (req, res) => {
    res.sendFile(path.join(__dirname, 'ai-ml.html'));
});

app.get('/data-analysis', (req, res) => {
    res.sendFile(path.join(__dirname, 'data-analysis.html'));
});

app.get('/cybersecurity', (req, res) => {
    res.sendFile(path.join(__dirname, 'cybersecurity.html'));
});

app.get('/mobile-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'mobile-app.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Fallback route - serve index.html for any unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Nexora Academy is running on port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
    console.log(`✨ Environment: ${process.env.NODE_ENV || 'development'}`);
});
