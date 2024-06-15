import React from "react";
import './ButtonIcon.css'

function ButtonIcon({ children, onClick }) {
  return (
    <button className="button-icon" onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonIcon;