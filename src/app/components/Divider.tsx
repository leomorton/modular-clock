"use client";
import { useEffect, useRef } from "react";

type DividerProps = {
  visible: boolean;
};

const Divider = (props: DividerProps) => {
  const oneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.visible) {
      oneRef.current?.classList.remove("invisible");
    } else {
      oneRef.current?.classList.add("invisible");
    }
  }, [props.visible]);

  return (
    <div className="grid grid-cols-1 grid-rows-3">
      <div className="h-16 w-16"></div>
      <div
        id="one"
        className={"h-16 w-16 rounded-full bg-indigo-400 transition-all"}
        ref={oneRef}
      ></div>
      <div className="h-16 w-16"></div>
    </div>
  );
};

export default Divider;
