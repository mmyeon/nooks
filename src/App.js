import React from "react";
import usePreventLeave from "./usePreventLeave";

// TODO: 윈도우 창 닫을때 진짜 닫을거야?라고 물어보기
const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default App;
