import ApiFetch from "./ApiFetchContext"

function Products() {
    const { product } = ApiFetch();
    console.log(product)
    return (
        <div>
            <ul>
                {product.id}

                    
                
            </ul>
            
        </div>
    )
}

export default Products
