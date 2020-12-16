import React, { useState } from "react";

// 특정 문자 못오게 하는 유효성 검사 추가
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // console.log(e.target)
    const {
      target: { value },
    } = event;
  };

  return { value, onChange };
  //{value:value} {value : initialValue}를 생략한 것
};

const App = () => {
  const name = useInput("Mr.");
  const email = useInput("@");

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} /> */}
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />
      {/* 전개연산자로 name 안에 있는 모든 것을 언패킹해줌 */}
      {/* 그냥 안에 있는 모든 것을 언패킹해줌 - 전개연산자는 혁명적임 */}
    </div>
  );
};

export default App;
