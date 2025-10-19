import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from './components/Scene';
import ProductInfo from './components/ProductInfo';
import ProductGrid from './components/ProductGrid';
import { products } from './data/products';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#1a1a1a');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]);
      setSelectedColor(products[0].colors[0].hex);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0].hex);
  };

  const handleColorChange = (colorHex) => {
    setSelectedColor(colorHex);
  };

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="spinner"></div>
            <div className="loading-text">Loading 3D Experience...</div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="header">
        <h1>3D TECH SHOWCASE</h1>
        <div className="header-nav">
          <span>By Pau Ventura</span>
        </div>
      </header>

      <div className="main-container">
        <div className="canvas-container">
          {selectedProduct && (
            <Scene 
              product={selectedProduct}
              selectedColor={selectedColor}
            />
          )}
        </div>

        <div className="product-info-sidebar">
          <ProductInfo 
            product={selectedProduct}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
          />
        </div>
      </div>

      <div className="product-grid-container">
        <ProductGrid 
          products={products}
          selectedProduct={selectedProduct}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
}

export default App;