import React from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

const App = () => {
  return (
    <>
      <MyComponent favoriteNumber={26}> 리액트</MyComponent> <br />
      <Counter /> <br />
      <Say /> <br />
      <EventPractice />
    </>
  );
};

export default App;
