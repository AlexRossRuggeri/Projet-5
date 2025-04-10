// import { useState } from "react";
import "./collapse.scss";
// import React from "react";

// function Collapse = () {
//   const [isOpen, setIsOpen] = useState(false);

//   return isOpen ? (
//     <div className="valeurs">
//       <button onClick={() => setIsOpen(false)}>
//         <i className="fa-solid fa-chevron-up" />
//       </button>
//     </div>
//   ) : (
//     <button onClick={() => setIsOpen(true)}>
//       <i className="fa-solid fa-chevron-down" />
//     </button>
//   );
// }

const Collapse = ({ id, title, content, isOpen, onClick }) => {
  return (
    <div className="collapse-container" id={`collapse-${id}`}>
      <button className="collapse-button" onClick={onClick}>
        <span>{title}</span>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up" />
        ) : (
          <i className="fa-solid fa-chevron-down" />
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
