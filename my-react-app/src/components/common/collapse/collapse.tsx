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
          className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
        />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
