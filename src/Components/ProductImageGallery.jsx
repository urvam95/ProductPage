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
                <img src={product.images[0]} alt="Lash Princess Mascara"/>
            </div> : <div></div>}
            {product ? <div className="image-thumbnails">
                <img src={product.thumbnail} alt="Lash Princess Mascara" />
                <img src={product.thumbnail} alt="Lash Princess Mascara" />
                <img src={product.thumbnail} alt="Lash Princess Mascara"/>
            </div>: <p>no</p>}
            
            
        </div>
    )
}

export default ProductImageGallery
