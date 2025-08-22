const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const transformedData = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    imageUrl: "products/athletic-cotton-socks-6-pairs.jpg",
    rating: 4,
    price: 10.99,
    description: "A comfortable and durable 6-pack of athletic socks made from a soft cotton blend. Perfect for daily wear or sports activities.",
    category: "Clothing"
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    name: "Intermediate Size Basketball",
    imageUrl: "products/intermediate-composite-basketball.jpg",
    rating: 3,
    price: 24.50,
    description: "An intermediate-sized basketball with a high-quality composite cover for both indoor and outdoor play. Provides excellent grip and durability.",
    category: "Sports & Outdoors"
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    imageUrl: "products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    rating: 5,
    price: 15.00,
    description: "A versatile 2-pack of plain cotton t-shirts, designed for comfort and simplicity. Made from 100% breathable cotton.",
    category: "Clothing"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    name: "2 Slot Toaster - White",
    imageUrl: "products/2-slot-toaster-white.jpg",
    rating: 4,
    price: 29.95,
    description: "This compact 2-slot toaster features a stylish white finish and multiple browning settings for perfect toast every time.",
    category: "Electronics"
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    name: "2 Piece White Dinner Plate Set",
    imageUrl: "products/elegant-white-dinner-plate-set.jpg",
    rating: 4,
    price: 18.25,
    description: "An elegant set of two white dinner plates. Their classic design is perfect for both casual meals and formal dinner parties.",
    category: "Home Goods"
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    name: "3 Piece Non-Stick, Black Cooking Pot Set",
    imageUrl: "products/3-piece-cooking-set.jpg",
    rating: 5,
    price: 65.00,
    description: "A durable and versatile 3-piece non-stick cooking set. Includes a small pot, a medium pot, and a frying pan, all with ergonomic handles.",
    category: "Home Goods"
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    name: "Cotton Oversized Sweater - Gray",
    imageUrl: "products/women-plain-cotton-oversized-sweater-gray.jpg",
    rating: 4,
    price: 32.99,
    description: "An ultra-soft oversized sweater made from a premium cotton blend. Its relaxed fit makes it a cozy choice for any season.",
    category: "Clothing"
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    name: "2 Piece Luxury Towel Set - White",
    imageUrl: "products/luxury-towel-set.jpg",
    rating: 5,
    price: 28.50,
    description: "A plush and absorbent two-piece luxury towel set, perfect for adding a touch of spa-like comfort to your bathroom.",
    category: "Home Goods"
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    name: "Ultra Soft Tissue 2-Ply - 8 Boxes",
    imageUrl: "products/facial-tissue-2-ply-8-boxes.jpg",
    rating: 4,
    price: 9.75,
    description: "An 8-pack of ultra-soft 2-ply facial tissues. Hypoallergenic and gentle on the skin, perfect for everyday use.",
    category: "Home Goods"
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    name: "Women's Striped Beach Dress",
    imageUrl: "products/women-striped-beach-dress.jpg",
    rating: 3,
    price: 45.00,
    description: "A lightweight and airy striped beach dress, ideal for a day at the beach or a casual summer outing.",
    category: "Clothing"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    name: "Women's Sandal Heels - Pink",
    imageUrl: "products/women-sandal-heels-white-pink.jpg",
    rating: 4,
    price: 55.00,
    description: "Elegant and comfortable sandal heels in a lovely pink shade. Perfect for special occasions or a night out.",
    category: "Shoes"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    name: "Round Sunglasses",
    imageUrl: "products/round-sunglasses-gold.jpg",
    rating: 4,
    price: 19.99,
    description: "Classic round sunglasses with a gold frame and UV protection. A timeless accessory for any sunny day.",
    category: "Accessories"
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    name: "Blackout Curtains Set - Beige",
    imageUrl: "products/blackout-curtain-set-beige.jpg",
    rating: 5,
    price: 59.99,
    description: "A set of high-quality blackout curtains that block out light and provide insulation, helping you sleep better and save on energy costs.",
    category: "Home Goods"
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    name: "Women's Summer Jean Shorts",
    imageUrl: "products/women-summer-jean-shorts.jpg",
    rating: 3,
    price: 25.50,
    description: "A classic pair of summer jean shorts with a relaxed fit and comfortable stretch denim.",
    category: "Clothing"
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    name: "Electric Hot Water Kettle - White",
    imageUrl: "products/electric-steel-hot-water-kettle-white.jpg",
    rating: 4,
    price: 38.00,
    description: "A fast-heating electric kettle with a stainless steel interior and a sleek white exterior. Features an automatic shut-off for safety.",
    category: "Electronics"
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    imageUrl: "products/knit-athletic-sneakers-gray.jpg",
    rating: 5,
    price: 75.00,
    description: "Lightweight and waterproof knit sneakers, perfect for running or casual wear. The gray color pairs well with any outfit.",
    category: "Shoes"
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    name: "Straw Wide Brim Sun Hat",
    imageUrl: "products/straw-sunhat.jpg",
    rating: 4,
    price: 22.00,
    description: "A stylish wide-brim straw hat that provides excellent sun protection. Lightweight and comfortable for all-day wear.",
    category: "Accessories"
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    name: "Men's Athletic Sneaker - White",
    imageUrl: "products/men-athletic-shoes-white.jpg",
    rating: 3,
    price: 68.00,
    description: "A classic white athletic sneaker for men. Provides support and comfort for workouts or everyday activities.",
    category: "Shoes"
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    name: "Men's Wool Sweater - Black",
    imageUrl: "products/men-stretch-wool-sweater-black.jpg",
    rating: 5,
    price: 49.99,
    description: "A warm and stylish black wool sweater. Made from a soft, stretchable fabric for maximum comfort.",
    category: "Clothing"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    name: "Bathroom Bath Mat 16 x 32 Inch - Grey",
    imageUrl: "products/bathroom-mat.jpg",
    rating: 4,
    price: 16.50,
    description: "An absorbent and soft gray bath mat. Its non-slip backing ensures safety, and the color complements any bathroom decor.",
    category: "Home Goods"
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    name: "Women's Ballet Flat - White",
    imageUrl: "products/women-knit-ballet-flat-white.jpg",
    rating: 4,
    price: 35.00,
    description: "A simple and comfortable pair of white knit ballet flats. Their flexible design makes them perfect for all-day wear.",
    category: "Shoes"
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    name: "Men's Golf Polo Shirt - Gray",
    imageUrl: "products/men-golf-polo-t-shirt-gray.jpg",
    rating: 3,
    price: 42.00,
    description: "A moisture-wicking golf polo shirt for men. Its breathable fabric and relaxed fit provide comfort on the course.",
    category: "Clothing"
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    name: "Laundry Detergent Tabs, 50 Loads",
    imageUrl: "products/laundry-detergent-tabs.jpg",
    rating: 5,
    price: 19.99,
    description: "50 pre-measured laundry detergent tabs for easy and effective cleaning. Works in all washing machines.",
    category: "Home Goods"
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    name: "Sterling Silver Leaf Branch Earrings",
    imageUrl: "products/sky-leaf-branch-earrings.jpg",
    rating: 5,
    price: 28.00,
    description: "Delicate sterling silver earrings with a beautiful leaf branch design. A perfect gift for any nature lover.",
    category: "Jewelry"
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    name: "Duvet Cover Set, Diamond Pattern",
    imageUrl: "products/duvet-cover-set-gray-queen.jpg",
    rating: 4,
    price: 85.00,
    description: "A stylish and comfortable duvet cover set with a modern diamond pattern. Includes a duvet cover and two pillow shams.",
    category: "Home Goods"
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    name: "Women's Knit Winter Beanie - Blue",
    imageUrl: "products/women-knit-beanie-pom-pom-blue.jpg",
    rating: 4,
    price: 14.99,
    description: "A cozy knit beanie with a fun pom-pom top. Its soft material provides warmth and style for cold weather.",
    category: "Clothing"
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    name: "Men's Chino Pants - Beige",
    imageUrl: "products/men-chino-pants-beige.jpg",
    rating: 4,
    price: 48.00,
    description: "A versatile pair of beige chino pants for men. The classic cut and comfortable fabric make them a wardrobe staple.",
    category: "Clothing"
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    name: "Men's Navigator Sunglasses",
    imageUrl: "products/men-navigator-sunglasses-black.jpg",
    rating: 5,
    price: 21.00,
    description: "Stylish navigator sunglasses with a black frame and polarized lenses for clear vision and UV protection.",
    category: "Accessories"
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    name: "Men's Brown Flat Sneakers",
    imageUrl: "products/men-brown-flat-sneakers.jpg",
    rating: 3,
    price: 60.00,
    description: "A simple and stylish pair of brown flat sneakers for men. The classic design is easy to pair with any casual outfit.",
    category: "Shoes"
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    name: "Non-Stick Cook Set With Lids - 4 Pieces",
    imageUrl: "products/non-stick-cooking-set-4-pieces.jpg",
    rating: 4,
    price: 95.00,
    description: "A complete non-stick cook set with four pieces and matching lids. The durable coating makes cooking and cleanup a breeze.",
    category: "Home Goods"
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    name: "Vanity Mirror with LED Lights - Pink",
    imageUrl: "products/vanity-mirror-pink.jpg",
    rating: 5,
    price: 38.99,
    description: "A beautiful pink vanity mirror with built-in LED lights for perfect makeup application. The adjustable stand makes it a great addition to any desk.",
    category: "Home Goods"
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    name: "Women's Relaxed Lounge Pants - Pink",
    imageUrl: "products/women-relaxed-lounge-pants-pink.jpg",
    rating: 4,
    price: 28.00,
    description: "Soft and comfortable relaxed lounge pants in a gentle pink color. Perfect for a cozy night in or a lazy weekend morning.",
    category: "Clothing"
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    name: "Crystal Zirconia Stud Earrings - Pink",
    imageUrl: "products/crystal-zirconia-stud-earrings-pink.jpg",
    rating: 5,
    price: 12.50,
    description: "A sparkling pair of pink crystal zirconia stud earrings. These elegant earrings are perfect for adding a touch of glamour to any outfit.",
    category: "Jewelry"
  },
];

app.use(cors());
app.use(express.json());

// Main endpoint to get data. Handles a new "expand=categories" query.
app.get('/api/top-sellers', (req, res) => {
  // Check if the 'expand' query parameter is set to 'categories'.
  if (req.query.expand === 'categories') {
    // If so, get a unique list of all categories from the data.
    const categories = [...new Set(transformedData.map(product => product.category))];
    res.json({
      message: 'Categories successfully retrieved',
      values: categories
    });
  } else {
    // Otherwise, return all product data as before.
    res.json({
      message: 'Data successfully retrieved',
      values: transformedData
    });
  }
});

// Endpoint to get a product by its index
app.get('/api/product', (req, res) => {
  const index = parseInt(req.query.index);
  if (isNaN(index) || index < 0 || index >= transformedData.length) {
    return res.status(404).json({ error: 'No product found at this index.' });
  }
  const product = transformedData[index];
  res.json(product);
});

// New endpoint to get products by a specific category
app.get('/api/products-by-category', (req, res) => {
  const category = req.query.category;
  if (!category) {
    return res.status(400).json({ error: 'Category query parameter is required.' });
  }
  const filteredProducts = transformedData.filter(product => product.category.toLowerCase() === category.toLowerCase());
  if (filteredProducts.length === 0) {
    return res.status(404).json({ error: 'No products found for this category.' });
  }
  res.json({ values: filteredProducts });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
