import React from 'react';

interface ButtonProps {
  text: String;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({ text = "Button", onClick }) => {

  const handleClick = () => {
    onClick && onClick("Button clicked!")
  }

  return (
    <>
      <button onClick={handleClick} style={{
        fontWeight: 700,
        minWidth: 150,
        fontSize: "30px",
        lineHeight: "80px",
        cursor: "pointer",
        borderRadius: "4px",
        background: "#282c34",
        color: "#fff",
      }}>{text}</button>
    </>
  );
};

export default Button;
