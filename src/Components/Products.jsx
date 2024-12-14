import { useContext } from "react"

import APIContext from "../Context/ApiFetchContext"
import "./ProductDetail.css"

function Products() {
    const { product, loading,error } = useContext(APIContext);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>error</div>
    console.log(product);
    return (
        <div className="product-detail">
           
            {product ? (   
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price}</p>
                   
                </div>
            ) : <div> no</div>}
            {product && <div className="product-images">
                <img src={product.thumbnail} />
                 <div className="add-to-cart" >
                    <button className="add-to-cart">Add to cart</button>
                 </div>
                </div>}
           
            
        </div>
    )
}

export default Products
