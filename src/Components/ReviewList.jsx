import APIContext from "../Context/ApiFetchContext"
import { useContext } from "react";
import "../Styles/ProductReview.css"
function ReviewList() {
     const { product, loading,error } = useContext(APIContext);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>error</div>

    return (
        <div className="review-list">
            <h4>1-3 of 1391 Reviews</h4>
            {product && product.reviews.map((rev, index) => (
                <div key={index} className="review">
                    <h5 className="review-author">{rev.reviewerName}</h5>
                    <div className="user-rating">{"★".repeat(rev.rating)}</div>
                    <span className="review-date">{rev.date}</span>
                    <h6>{ rev.comment}</h6>
                </div>
            ))}
            
        </div>
    )
}

export default ReviewList
