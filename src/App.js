import { useRef, useEffect } from "react";
import React from "react";

const App = () => {
  const potato = useRef();

  // setTimeout(() => console.log(potato.current), 3000);

  useEffect(() => {
    setTimeout(() => potato.current.focus(), 3000);
  }, []);

  return (
    <div>
      <div>HI</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

export default App;
