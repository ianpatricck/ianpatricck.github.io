import { RefObject, useEffect } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void,
) {
  function handleClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
