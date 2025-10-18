# 🎮 3D Tech Showcase

> Interactive 3D product showcase featuring gaming peripherals with smooth interactions and premium Apple-inspired design.

![3D Tech Showcase](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

---

## ✨ Features

- 🎯 **Interactive 3D Models** - Real gaming peripherals with smooth rotation
- 🎨 **Dynamic Color Picker** - Change product colors in real-time
- 🖱️ **Intuitive Controls** - Drag to rotate, scroll to zoom
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **Optimized Performance** - Fast loading with model preloading
- 🎭 **Premium UI** - Apple/Nike inspired minimalist design
- 🌟 **Smooth Animations** - Framer Motion powered transitions

---

## 🛠️ Tech Stack

**Frontend**
- React.js 18
- Three.js (r128)
- React Three Fiber
- React Three Drei
- Framer Motion

**Styling**
- CSS Grid & Flexbox
- CSS Custom Properties
- Responsive Design
- Glassmorphism Effects

**Performance**
- Model Preloading
- Lazy Loading with Suspense
- Optimized 3D Rendering

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/PauVentura30/3d-tech-showcase.git

# Navigate to project directory
cd 3d-tech-showcase

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

---

## 📦 Project Structure
```
3d-tech-showcase/
├── public/
│   └── models/          # 3D model files (.glb)
│       ├── headset.glb
│       ├── keyboard.glb
│       ├── mouse.glb
│       └── watch.glb
├── src/
│   ├── components/
│   │   ├── Scene.jsx           # Main 3D scene
│   │   ├── Product3D.jsx       # 3D product component
│   │   ├── ProductInfo.jsx     # Product sidebar
│   │   └── ProductGrid.jsx     # Product thumbnails
│   ├── data/
│   │   └── products.js         # Product data
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🎨 Products

| Product | Features | Colors |
|---------|----------|--------|
| 🎧 **Gaming Headset Pro** | Wireless 2.4GHz, 7.1 Surround, RGB | Black, Red, Blue, Green |
| ⌨️ **Mechanical Keyboard RGB** | Hot-swappable, Per-key RGB, Aluminum | White, Black, Purple |
| 🖱️ **Gaming Mouse X** | 20K DPI, 69g, RGB Lighting | White, Black, Pink |
| ⌚ **Smart Watch Pro** | AMOLED, GPS, Heart Rate Monitor | Silver, Black, Gold |

---

## 🎯 Key Features Breakdown

### Interactive 3D Models
- Real-time rendering with Three.js
- Smooth auto-rotation
- Mouse drag to manually rotate
- Scroll to zoom in/out

### Color System
- Dynamic material color application
- Preserves original textures
- Multiplicative color blending
- Instant visual feedback

### Responsive Design
- CSS Grid for layout
- Adaptive sidebar
- Mobile-optimized controls
- Touch gesture support

---

## 🚀 Performance Optimizations

- ✅ Model preloading for instant switches
- ✅ Memoized 3D scenes to prevent re-renders
- ✅ Efficient material cloning
- ✅ Lazy loading with React Suspense
- ✅ Optimized lighting setup

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 🎓 What I Learned

- Advanced Three.js concepts (lighting, shadows, materials)
- React Three Fiber ecosystem
- 3D model optimization for web
- Performance tuning for 3D web apps
- CSS Grid for complex layouts
- Dynamic color manipulation in 3D space

---

## 🔮 Future Enhancements

- [ ] Add product animations on selection
- [ ] Implement AR view for mobile
- [ ] Add multiple camera angles
- [ ] Product comparison feature
- [ ] Shopping cart integration
- [ ] Export product configurations

---

## 👨‍💻 Author

**Pau Ventura**

- Portfolio: [pauventura.com](https://portfolio-pau-ventura.netlify.app)
- GitHub: [@PauVentura30](https://github.com/PauVentura30)
- LinkedIn: [Pau Ventura](https://www.linkedin.com/in/pau-ventura-612450250/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- 3D Models from [Sketchfab](https://sketchfab.com/)
- Inspiration from Apple and Nike product pages
- Three.js community for amazing documentation

---

<div align="center">

**⭐ If you like this project, give it a star!**

Made with ❤️ and Three.js

</div>