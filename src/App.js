import React from "react";
import useFadeIn from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5);

  return (
    <div>
      <h1 {...fadeInH1}>Hi</h1>
      <p {...fadeInP}>What's going on ???????????</p>
    </div>
  );
};

export default App;
