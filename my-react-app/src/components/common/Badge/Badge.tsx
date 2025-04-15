import "./Badge.scss";

interface BadgeProps {
  tags: string[];
}

function Badge({ tags }: BadgeProps) {
  return (
    <div className="badge__container">
      <ul className="badge__list">
        {tags.map((tag, index) => (
          <li key={index} className="badge__item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Badge;
