import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    if (typeof onBefore === "function") {
      const { clientY } = event;
      if (clientY <= 0) {
        window.alert("쿠폰 줄게요! 기다려주세요!");
      }

      //   if (clientY <= 0) {
      //     onBefore();
      //   }
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default useBeforeLeave;
