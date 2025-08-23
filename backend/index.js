// --- NEW ENDPOINT: Add an item to the cart ---
// This endpoint receives an object from the frontend and adds it to the cart array.
app.post('/api/cart', (req, res) => {
  const newItem = req.body;

  // Basic validation to ensure the item has an ID and quantity
  if (!newItem || !newItem.id || !newItem.quantity) {
    return res.status(400).json({ error: 'Invalid cart item data.' });
  }

  // Check if the item already exists in the cart
  const existingItem = mockCartItems.find(item => item.id === newItem.id);

  if (existingItem) {
    // If it exists, update the quantity
    existingItem.quantity += newItem.quantity;
    res.json({ message: 'Item quantity updated successfully.', values: existingItem });
  } else {
    // If it's a new item, add it to the cart array
    mockCartItems.push(newItem);
    res.status(201).json({ message: 'Item added to cart successfully.', values: newItem });
  }
});
