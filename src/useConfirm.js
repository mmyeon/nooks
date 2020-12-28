// import { useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancle) => {
  // onConfirm은 required임.
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  //   onCancle은 required가 아님.
  if (onCancle && typeof onCancle !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };

  return confirmAction;
};

export default useConfirm;
