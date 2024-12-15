import { useContext } from "react"
import "../Styles/ProductImageGallery.css"

import APIContext from "../Context/ApiFetchContext"

function ProductImageGallery() {
    const { product, loading,error } = useContext(APIContext);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>error</div>

    return (
        <div className="image-gallery">
            {product ? <div className="main-image">
                <img src={product.thumbnail} />
            </div> : <div></div>}
            
            
        </div>
    )
}

export default ProductImageGallery
