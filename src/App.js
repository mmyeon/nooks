import React from "react";
import useBeforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);
  return <div>Hi</div>;
};

export default App;
