import "./collapse.scss";

interface CollapseProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: (id: string) => void;
}

const Collapse = ({ id, title, content, isOpen, onClick }: CollapseProps) => {
  return (
    <div className="collapse-container" id={`collapse-${id}`}>
      <button className="collapse-button" onClick={() => onClick(id)}>
        <span>{title}</span>
        {isOpen ? (
          <i className="fa-solid fa-chevron-down" />
        ) : (
          <i className="fa-solid fa-chevron-up" />
        )}
      </button>
      {isOpen && (
        <div id={`content-${id}`} className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Collapse;
