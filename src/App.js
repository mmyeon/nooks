import React from "react";
import useScroll from "./useScroll";

const App = () => {
  // y의 값만 필요하므로 y만 구조 분해 할당하기
  const { y } = useScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default App;
