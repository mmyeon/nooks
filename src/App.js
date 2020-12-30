import React from "react";
import useNetwork from "./useNetwork";

// TODO: 네트워크가 바뀔때마다 함수 호출하기

const App = () => {
  const handleNetworkChange = (onLine) =>
    console.log(console.log(onLine ? "We just went online" : "We are offline"));
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
