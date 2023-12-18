import React, { useState } from "react";
import "./TestesPage.css";

const TestesPage = () => {
  const [state, setState] = useState("");

  const changeHandler = (e) => {
    console.log("value changed: ", e.target.value);
  };

  const blurHandler = () => {
    setState("cyan")
  };

  return (
    <div className="testes-flex">
      <input
        style={{backgroundColor: state}}
        placeholder="Enter email"
        onChange={changeHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default TestesPage;
