import React from "react";

const Cart=({cart})=>{
    return(
        <div className="container">
            <div className="row">
        <h1>Products</h1>
        {
            cart.map((item)=>(
                <div className="col">
                        <div class="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.category}</h5>
    <p class="card-text">{item.price}</p>
  </div>
</div>
</div>
            ))
        }

        </div>
        </div>
    )
}
export default Cart