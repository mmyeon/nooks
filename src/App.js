import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      // 유효성 검사 실행
      // validator가 실행되기를 기다리고 있음
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  // bool을 리턴함
  // @을 포함하면 false임
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  const email = useInput("@");

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <input placeholder="Email" {...email} />
    </div>
  );
};

export default App;
