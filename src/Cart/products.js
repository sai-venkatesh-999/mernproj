import React from "react";

const Product = ({ products, addCart }) => {
  return (
    <div className="container">
      <div className="row">
        <h1>Products</h1>
        {
          products.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.category}</h5>
                  <p className="card-text">{item.price}</p>
                  <button className="btn btn-primary" onClick={() => addCart(item)}>Add</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Product;
