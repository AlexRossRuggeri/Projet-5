import "./Ranking.scss";

interface RatingProps {
  rating: string;
}

function StarRating({ rating }: RatingProps) {
  const numericRating = parseInt(rating);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="star"
            style={{
              color: numericRating >= star ? "#FF6060" : "#E3E3E3",
              fontSize: `35px`,
            }}
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
