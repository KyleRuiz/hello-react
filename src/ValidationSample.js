import React, { useRef, useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const inputEl = useRef(null);
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === "0000" ? true : false);
    inputEl.current.focus();
  };
  return (
    <div>
      <input
        ref={inputEl}
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
