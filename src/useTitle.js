import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // 컴포넌트가 마운트 될 떼 + 타이틀 스테이트가 변할 때 updateTitle함수가 호출되길 바람
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;
