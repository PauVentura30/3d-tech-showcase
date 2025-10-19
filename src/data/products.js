// Base de datos de productos con configuración 3D individual
export const products = [
  {
    id: 1,
    name: "Gaming Headset Pro",
    price: 129.99,
    category: "Audio",
    description: "Wireless gaming headset with 7.1 surround sound and RGB lighting",
    specs: [
      "Wireless 2.4GHz",
      "7.1 Surround Sound",
      "RGB Lighting",
      "50mm Drivers",
      "20h Battery Life"
    ],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Red", hex: "#ff0000" },
      { name: "Blue", hex: "#0066ff" },
      { name: "Green", hex: "#00ff00" }
    ],
    modelPath: "/models/headset.glb",
    modelScale: 12,
    modelPosition: [0, -2, 0]
  },
  {
    id: 2,
    name: "Mechanical Keyboard RGB",
    price: 149.99,
    category: "Peripherals",
    description: "Premium mechanical keyboard with hot-swappable switches",
    specs: [
      "Hot-swappable Switches",
      "Per-key RGB",
      "Aluminum Frame",
      "USB-C Connection",
      "N-Key Rollover"
    ],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Purple", hex: "#9900ff" }
    ],
    modelPath: "/models/keyboard.glb",
    modelScale: 15,
    modelPosition: [0, 0, 0]
  },
  {
    id: 3,
    name: "Gaming Mouse X",
    price: 79.99,
    category: "Peripherals",
    description: "Ultra-lightweight gaming mouse with 20K DPI sensor",
    specs: [
      "20,000 DPI Sensor",
      "69g Weight",
      "8 Programmable Buttons",
      "RGB Lighting",
      "1000Hz Polling Rate"
    ],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Pink", hex: "#ff69b4" }
    ],
    modelPath: "/models/mouse.glb",
    modelScale: 1,
    modelPosition: [0, -1, 0]
  },
  {
    id: 4,
    name: "Smart Watch Pro",
    price: 299.99,
    category: "Wearables",
    description: "Premium smartwatch with fitness tracking and AMOLED display",
    specs: [
      "AMOLED Display",
      "Heart Rate Monitor",
      "GPS Built-in",
      "5 Days Battery",
      "Water Resistant IP68"
    ],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Silver", hex: "#c0c0c0" },
      { name: "Gold", hex: "#ffd700" }
    ],
    modelPath: "/models/watch.glb",
    modelScale: 40,
    modelPosition: [0, -0.5, 0]
  }
];