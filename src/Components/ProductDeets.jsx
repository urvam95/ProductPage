import { useContext } from "react"
import "../Styles/ProductDeets.css"

import APIContext from "../Context/ApiFetchContext"

function ProductDeets() {
     const { product, loading,error } = useContext(APIContext);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>error</div>
    return (
        <div className="product-details">
            
            {product &&
                <>
                <h1 className="product-title">
                    {product.title}
                </h1>
                <div className="product-rating">
                  
                    {product.availabilityStatus}
                    <p className="product-price">${product.price}</p>
                    <span>{ product.stock} left in stock</span>
                </div>
                <div className="add-to-cart">
                    <button>-</button>
                    1
                    <button>+</button>

                   
                    
                </div>

                <div>
                    <button className="cart-button">Add to Cart</button>
                    

                </div>
                </>
            }
            

            
            
        </div>
    )
}

export default ProductDeets
