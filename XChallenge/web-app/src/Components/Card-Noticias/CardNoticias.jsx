import React from "react";
import "./CardNoticias.css";

import {DateFormatString} from "../../Utils/DateFormat"

const CardNoticias = ({ text, date, color, backColor }) => {
  return (
    <div style={{ backgroundColor: backColor }} className="card-box">
      <p style={{ color: color }} className="paragrafo-card">
        {text}
      </p>

      <h2 style={{ color: color }} className="date-card">
        {DateFormatString(date)}
      </h2>
    </div>
  );
};

export default CardNoticias;
