import { useRef, useEffect } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        //if the click happens outside the modal
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapturing); //true means that the event will be handled in the capturing phase(moves down the tree)

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing); //true means that the event will be handled in the capturing phase(moves down the tree)
    },
    [handler, listenCapturing]
  );

  return ref;
}
