import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product, selectedColor, onColorChange }) => {
  if (!product) return null;

  return (
    <div className="product-info">
      {/* Categoría */}
      <div className="product-category">{product.category}</div>
      
      {/* Nombre */}
      <h2 className="product-name">{product.name}</h2>
      
      {/* Precio */}
      <div className="product-price">${product.price}</div>
      
      {/* Descripción */}
      <p className="product-description">{product.description}</p>
      
      {/* Selector de colores */}
      <div className="color-selector">
        <h4>Colors</h4>
        <div className="color-options">
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`color-btn ${selectedColor === color.hex ? 'active' : ''}`}
              style={{ background: color.hex }}
              onClick={() => onColorChange(color.hex)}
              title={color.name}
            >
              {selectedColor === color.hex && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Especificaciones */}
      <div className="product-specs">
        <h4>Specifications</h4>
        <ul>
          {product.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      
      {/* Botón CTA */}
      <button className="cta-button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;