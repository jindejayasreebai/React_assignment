import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDisplay.css"; // Import the CSS file
import Logo from "./logo.png"; // Import the logo image
import Footer from "./Footer"; // Import the Footer component

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (productId) => {
    const url = `product-details.html?id=${productId}`;
    window.open(url, "_blank");
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setAnimationIndex(0);
    }
  };

  return (
    <div className="container">
      <img src={Logo} alt="Logo" className="logo" /> {/* Add logo */}
      <div className="links">
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      <br />
      <h1>Products</h1>
      <div className="content">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                onClick={() => handleClick(product.id)}
                style={{ cursor: "pointer" }} // Add cursor style
              />
              <div className="product-details">
                <h2 className="product-title">
                  {product.title.substring(0, 15)}
                </h2>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-description">
                  {product.description.substring(0, 50)}
                </p>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-rating">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default ProductDisplay;
