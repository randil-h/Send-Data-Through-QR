const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // Backend port

app.use(cors());

// Endpoint to handle the QR code scan
app.get('/scan', (req, res) => {
    const id = req.query.id; // Get the 'id' from the query parameter
    console.log('Scanned ID:', id); // Log the ID to the console
    res.status(200).send(`ID ${id} received successfully`);
});

app.listen(port, () => {
    console.log(`Server is running on http://192.168.8.104:${port}`);
});
