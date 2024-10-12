/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Box({children, title}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box-container">
      <div className="box">
        <div className={isOpen ? "box-header open" : "box-header"}>
          <h1 className="box-title">{title}</h1>
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
        </div>
        {isOpen && (
          children
        )}
      </div>
    </div>
  );
}
