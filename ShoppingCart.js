// ShoppingCart.js
import React from 'react';
import "./ShoppingCart.css";

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className="cart-item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price} OMR</span>
              <button className="remove-from-cart-btn" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total Price: {getTotalPrice()} OMR</p>
    </div>
  );
};

export default ShoppingCart;
