import React from "react";
import "./Title.css";

const Title = ({ colorTitle = "black", textTitle }) => {
  return (
    <div>
      <h1 className="titulo" style={{ color: colorTitle }}>
        {textTitle}
      </h1>
    </div>
  );
};

export default Title;
