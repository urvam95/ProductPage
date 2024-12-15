import { useContext } from "react"

import APIContext from "../Context/ApiFetchContext"
import "./ProductDetail.css"
import { Breadcrumb } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ProductImageGallery from "./ProductImageGallery";

function Products() {
    const { product, loading,error } = useContext(APIContext);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>error</div>
    console.log(product);
    return (
        <>
             <div  style={{ display: 'block',  
                  width: 700, padding: 30, color: "#38a711" ,}}>

            
            <Breadcrumb className="active">
                <Breadcrumb.Item href="#">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Eyes
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Essence Mascara Lash Princess
                </Breadcrumb.Item>

                </Breadcrumb>
                </div>
       
        <div className="product-detail">
           
            {product ? (   
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price}</p>
                   
                </div>
            ) : <div> no</div>}
            {product && 
                    <div  >
                        <ProductImageGallery/>
                    <button className="add-to-cart">Add to cart</button>
                 </div>
                }
           
            
            </div>
             </>
    )
}

export default Products
