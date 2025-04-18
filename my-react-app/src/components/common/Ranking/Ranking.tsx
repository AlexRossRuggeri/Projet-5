import "./Ranking.scss";

interface RatingProps {
  rating: string;
}

function StarRating({ rating }: RatingProps) {
  const numericRating = parseInt(rating);
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className={`star-rating__star star-rating__star--${
              numericRating >= star ? "filled" : "empty"
            }`}
          >
            {" "}
            <i className="fa-solid fa-star" />{" "}
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
