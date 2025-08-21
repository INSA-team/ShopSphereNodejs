const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // This enables CORS for all routes
app.use(express.json()); // This allows the app to handle JSON data

// Define your endpoint
app.get('/api/top-sellers', (req, res) => {
  // Your JSON data with an array
  const data = {
    message: 'Data successfully retrieved',
    values: [{
      id: crypto.randomUUID(),
      name: '2 slot toaster',
      imageUrl: 'products/2-slot-toaster-white.jpg',
      rating: 3
    }]
  };
  
  // Send the JSON data back to the client
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});