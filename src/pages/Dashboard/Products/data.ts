import type { Product } from "./types";

const categories = [
  "Electronics",
  "Clothing",
  "Food & Beverages",
  "Home & Garden",
  "Sports",
  "Books",
  "Toys",
  "Beauty",
  "Automotive",
  "Office Supplies",
];
const statuses: Array<"active" | "inactive" | "out-of-stock"> = [
  "active",
  "active",
  "active",
  "active",
  "inactive",
  "out-of-stock",
];

const productNames = {
  Electronics: [
    "Wireless Headphones",
    "Smart Watch",
    "Laptop",
    "Tablet",
    "Phone Charger",
    "Bluetooth Speaker",
    "USB Cable",
    "Power Bank",
    "Keyboard",
    "Mouse",
  ],
  Clothing: [
    "T-Shirt",
    "Jeans",
    "Sneakers",
    "Jacket",
    "Dress",
    "Hoodie",
    "Cap",
    "Socks",
    "Belt",
    "Gloves",
  ],
  "Food & Beverages": [
    "Coffee Beans",
    "Green Tea",
    "Chocolate Bar",
    "Energy Drink",
    "Protein Bar",
    "Cookies",
    "Chips",
    "Juice",
    "Water Bottle",
    "Nuts",
  ],
  "Home & Garden": [
    "Lamp",
    "Cushion",
    "Vase",
    "Plant Pot",
    "Candle",
    "Mirror",
    "Rug",
    "Curtains",
    "Wall Art",
    "Storage Box",
  ],
  Sports: [
    "Yoga Mat",
    "Dumbbell Set",
    "Running Shoes",
    "Water Bottle",
    "Resistance Bands",
    "Jump Rope",
    "Tennis Racket",
    "Soccer Ball",
    "Swim Goggles",
    "Gym Bag",
  ],
  Books: [
    "Fiction Novel",
    "Cookbook",
    "Biography",
    "Self-Help Book",
    "Textbook",
    "Comic Book",
    "Magazine",
    "Children's Book",
    "Poetry Collection",
    "Travel Guide",
  ],
  Toys: [
    "Action Figure",
    "Board Game",
    "Puzzle",
    "Stuffed Animal",
    "Building Blocks",
    "Doll",
    "Remote Car",
    "Educational Toy",
    "Art Set",
    "Play Kitchen",
  ],
  Beauty: [
    "Face Cream",
    "Shampoo",
    "Lipstick",
    "Perfume",
    "Nail Polish",
    "Face Mask",
    "Body Lotion",
    "Hair Oil",
    "Makeup Brush Set",
    "Sunscreen",
  ],
  Automotive: [
    "Car Phone Holder",
    "Air Freshener",
    "Dash Cam",
    "Tire Pressure Gauge",
    "Car Cover",
    "Seat Cushion",
    "Steering Wheel Cover",
    "Floor Mats",
    "Jump Starter",
    "Cleaning Kit",
  ],
  "Office Supplies": [
    "Notebook",
    "Pen Set",
    "Stapler",
    "Desk Organizer",
    "Marker Set",
    "Paper Clips",
    "Sticky Notes",
    "Calculator",
    "File Folder",
    "Desk Lamp",
  ],
};

export const productsData: Product[] = Array.from({ length: 100 }, (_, i) => {
  const category = categories[i % categories.length];
  const nameOptions = productNames[category as keyof typeof productNames];
  const productName =
    nameOptions[Math.floor(i / categories.length) % nameOptions.length];
  const unitPrice = Math.floor(Math.random() * 500) + 10;
  const inStock = Math.floor(Math.random() * 200);
  const discount = [0, 0, 0, 5, 10, 15, 20, 25][Math.floor(Math.random() * 8)];
  const totalValue = Math.floor(unitPrice * inStock * (1 - discount / 100));
  const status =
    inStock === 0
      ? "out-of-stock"
      : statuses[Math.floor(Math.random() * statuses.length)];

  // Generate date with random time in the last 6 months
  const daysAgo = Math.floor(Math.random() * 180); // 0-180 days ago
  const dateAdded = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
  dateAdded.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60)
  );

  return {
    id: `PRD-${String(i + 1).padStart(4, "0")}`,
    productName: `${productName} ${Math.floor(i / 10) + 1}`,
    category,
    unitPrice,
    inStock,
    discount,
    totalValue,
    status,
    dateAdded: dateAdded.toISOString(), // Full ISO format with time
  };
});
