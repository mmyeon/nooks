import React from "react";
import useTitle from "./useTitle";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Welcome"), 3000);

  return (
    <div>
      <button onClick={() => titleUpdater("Changed")}>Change Title</button>
    </div>
  );
};

export default App;
