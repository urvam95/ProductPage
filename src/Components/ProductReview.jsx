import "../Styles/ProductReview.css"
import ReviewList from "./ReviewList"
function ProductReview() {
    return (
        <div className="product-reviews">
            <h3 className="reviews-title">product reviews</h3>
           
            <div className="reviews-summary">
                <div className="overall-rating">
          <span className="rating-value">4.94</span>
          <span className="rating-stars">★★★★★</span>
          <span className="rating-count">| 1391 Reviews</span>
                </div>
                <p>80 out of 93 (89%) reviewers recommend this product</p>
           

            </div>
            <ReviewList/>
            
        </div>
    )
}

export default ProductReview
