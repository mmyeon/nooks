import React, { useState } from "react";

// api로 무언가를 가져오려고함
// TODO: 내가 선택한 섹션의 내용만 보여주기
// TODO: 처음에는 Section 1의 컨텐츠가 보임.
// TODO: 현재 선택한 content의 인덱스를 얻고 싶다

const content = [
  {
    tab: "Section 1",
    content: " I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: " I'm the content of the Section 2",
  },
];

const useTabs = (initialIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  return {
    currentItem: allTabs[currentIndex],
  };
};

const App = () => {
  const tabs = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
    </div>
  );
};

export default App;
