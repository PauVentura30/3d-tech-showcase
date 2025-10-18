import React from 'react';
import { motion } from 'framer-motion';
import './ProductGrid.css';

const ProductGrid = ({ products, selectedProduct, onSelectProduct }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className={`product-thumbnail ${selectedProduct?.id === product.id ? 'active' : ''}`}
          onClick={() => onSelectProduct(product)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="thumbnail-placeholder">
            {product.category === 'Audio' && '🎧'}
            {product.category === 'Peripherals' && product.name.includes('Keyboard') && '⌨️'}
            {product.category === 'Peripherals' && product.name.includes('Mouse') && '🖱️'}
            {product.category === 'Wearables' && '⌚'}
          </div>
          <div className="thumbnail-info">
            <div className="thumbnail-name">{product.name}</div>
            <div className="thumbnail-price">${product.price}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;