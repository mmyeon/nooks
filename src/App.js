import React from "react";
import useConfirm from "./useConfirm";

const App = () => {
  const deleteWorld = () => {
    console.log("Deleting the world...");
  };
  const abort = () => {
    console.log("Aborted");
  };
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
