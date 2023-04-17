import React from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";

const App = () => {
  return (
    <>
      <MyComponent favoriteNumber={26}> 리액트</MyComponent> <br />
      <Counter /> <br />
      <Say /> <br />
      <EventPractice /> <br />
      <ValidationSample /> <br />
      <IterationSample /> <br />
    </>
  );
};

export default App;
