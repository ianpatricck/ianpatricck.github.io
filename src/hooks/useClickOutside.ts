import { RefObject, useEffect } from "react";

export function useClickOutside(
  reference: RefObject<HTMLElement>,
  callback: CallableFunction,
) {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target === reference.current?.parentNode) {
        callback();
      }
    });
  }, [reference]);
}
