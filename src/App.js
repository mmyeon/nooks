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
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
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
