// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const Products = () => {
//     const [categories, setcategories] = useState([]);

//     useEffect(() => {
//       axios("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
//       .then((res) => setcategories(res.data.categories))
//     },[])
//   return (
//     <div>
//         <h1>API data</h1>
//         {
//                 categories.map((category) => (
//                     <div>
//                         <p>{category.category_name}</p>
//                         <div>
//                             {
//                                 category.category_products.map((items) => (
//                                     <div> 
//                                         <img src={items.image} alt='' />
//                                         <p>{items.id}</p>
//                                         <p>{items.title}</p>
//                                         <p>{items.price}</p>
//                                         <p>{items.vendor}</p>
//                                     </div>
//                                 ))
//                             }
//                        </div>     
//                     </div>    
//                 ))
//           }
//     </div>
//   )
// }

// export default Products




import React from "react";

const App=()=>{
  const greet = (name) => {
    return 'hello,${name}! welcome to react';
  }
  const name ="sai"
  return (
    <div>
      <h1>{greet(name)}</h1>
    </div>
  )
})

export default App

