import React, { useEffect, useState } from "react";
import axios from "axios";
import "./API.css";

const API = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    axios("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
      .then((res) => setcategories(res.data.categories));
  }, []);

  return (
    <div className="api-container">
      {categories.map((category, index) => (
        <div className="category-block" key={index}>
          <h3>{category.category_name}</h3>
          <div className="products-container">
            {category.category_products.slice(0, 2).map((product, idx) => (
              <div className="product-card" key={idx}>
                <img src={product.image} alt="product" />
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
                <h3>{product.vendor}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default API;
