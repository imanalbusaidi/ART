// ShowProduct.js
import React, { useState } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import "./ProductPage.css"; // Import the consolidated stylesheet

const ShowProduct = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const products = [
    {
      id: 1,
      name: "Product 1: ",
      description: "Baby Flower Bag",
      price: 2,
      image: "images/image1.jpeg",
    },
    {
      id: 2,
      name: "Product 2:  ",
      description: "A beautiful cup",
      price: 2.5,
      image: "images/image2.jpg",
    },
    {
      id: 3,
      name: "Product 3: ",
      description: "Baby House Bag",
      price: 3,
      image: "images/image3.jpeg",
    },
    {
      id: 4,
      name: "Product 4: ",
      description: "bag with baby girl",
      price: 4,
      image: "images/image4.jpg",
    },
    {
      id: 5,
      name: "Product 5: ",
      description: "beautiful bag",
      price: 2,
      image: "images/image5.jpg",
    },
    {
      id: 6,
      name: "Product 6:  ",
      description: "Nice cup",
      price: 3.5,
      image: "images/image16.jpeg",
    },
    {
      id: 7,
      name: "Product 7: ",
      description: "beautiful girls bag",
      price: 2,
      image: "images/image7.jpg",
    },
    {
      id: 8,
      name: "Product 8: ",
      description: "beautiful girls bag",
      price: 2,
      image: "images/image8.jpg",
    },
    {
      id: 9,
      name: "Product 9: ",
      description: "sweet girls bag",
      price: 2,
      image: "images/image9.jpg",
    },
    {
      id: 10,
      name: "Product 10:  ",
      description: "Nice cup",
      price: 3.5,
      image: "images/image15.jpg",
    },
    {
      id: 11,
      name: "Product 11:  ",
      description: "sweet boys bag",
      price: 2.5,
      image: "images/image10.jpg",
    },
    {
      id: 12,
      name: "Product 12: ",
      description: "Baby Scribbles Shirt",
      price: 3,
      image: "images/image12.jpg",
    },
  ];

  return (
    <div className="product-page-container">
      <h1 className="store-heading">Discover our Collection</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ShowProduct;
