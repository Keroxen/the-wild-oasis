import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        }
        document.addEventListener("click", handleClick, listenCapturing);
        // true means the event will be handled in the capturing phase, not bubbling

        return () => document.removeEventListener("click", handleClick)
    }, [handler, listenCapturing]);

    return ref;
}
