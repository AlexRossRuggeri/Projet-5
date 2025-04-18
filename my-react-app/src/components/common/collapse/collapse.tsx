import { ReactNode } from "react";
import "./collapse.scss";

interface CollapseProps {
  id?: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Collapse = ({ id, title, isOpen, onClick, children }: CollapseProps) => {
  return (
    <div className="collapse-container" id={`collapse-${id}`}>
      <button className="collapse-button" onClick={() => onClick()}>
        <span>{title}</span>
        <i
          className={`collapse-icon fa-solid fa-chevron-up ${
            isOpen ? "collapse-icon--rotated" : ""
          }`}
        />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
