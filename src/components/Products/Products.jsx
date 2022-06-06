import React, { useEffect } from "react";

const Products = () => {

  const [product , setProduct] = React.useState([]);

  useEffect(()=>{

    axios.get(" http://localhost:8080/products")
    .then((r)=>setProduct(r.data.data));

  },[])
  
  console.log(product);
  return <div>Products
    <div>
     {product.map((d) =>(
       <div key={d.id}>
         <div>{d.name}</div>
         <div>{d.description}</div>
       </div>
     ))}
    </div>
  </div>;
};

export default Products;
