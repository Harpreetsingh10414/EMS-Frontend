import React from "react";
import "./Button.css"; // Import the CSS file

const Button = ({
  onClick,
  text,
  color = "blue", // Default to 'blue' if no color is passed
  disabled = false,
  className = "",
  type = "button",
}) => {
  // Define dynamic color class based on the color prop
  const colorClass = `button-${color}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${colorClass} ${className} ${
        disabled ? "button-gray" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
