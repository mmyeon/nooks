import React from "react";
import useClick from "./useClick";

const App = () => {
  const sayHello = () => {
    console.log("Say hello");
  };

  // useClick 호출하면 refence만들어짐
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>HI</h1>
    </div>
  );
};

export default App;
