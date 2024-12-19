"use client";
import { useEffect, useRef } from "react";

type DigitProps = {
  number: number;
};

const Digit = (props: DigitProps) => {
  const oneRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const fourRef = useRef<HTMLDivElement>(null);
  const fiveRef = useRef<HTMLDivElement>(null);
  const sixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    oneRef.current?.classList.remove(
      "one-1",
      "two-1",
      "three-1",
      "four-1",
      "five-1",
      "six-1",
      "seven-1",
      "eight-1",
      "nine-1",
      "zero-1",
    );
    twoRef.current?.classList.remove(
      "one-2",
      "two-2",
      "three-2",
      "four-2",
      "five-2",
      "six-2",
      "seven-2",
      "eight-2",
      "nine-2",
      "zero-2",
    );
    threeRef.current?.classList.remove(
      "one-3",
      "two-3",
      "three-3",
      "four-3",
      "five-3",
      "six-3",
      "seven-3",
      "eight-3",
      "nine-3",
      "zero-3",
    );
    fourRef.current?.classList.remove(
      "one-4",
      "two-4",
      "three-4",
      "four-4",
      "five-4",
      "six-4",
      "seven-4",
      "eight-4",
      "nine-4",
      "zero-4",
    );
    fiveRef.current?.classList.remove(
      "one-5",
      "two-5",
      "three-5",
      "four-5",
      "five-5",
      "six-5",
      "seven-5",
      "eight-5",
      "nine-5",
      "zero-5",
    );
    sixRef.current?.classList.remove(
      "one-6",
      "two-6",
      "three-6",
      "four-6",
      "five-6",
      "six-6",
      "seven-6",
      "eight-6",
      "nine-6",
      "zero-6",
    );
    if (props.number === 1) {
      oneRef.current?.classList.add("one-1");
      twoRef.current?.classList.add("one-2");
      threeRef.current?.classList.add("one-3");
      fourRef.current?.classList.add("one-4");
      fiveRef.current?.classList.add("one-5");
      sixRef.current?.classList.add("one-6");
    }
    if (props.number === 2) {
      oneRef.current?.classList.add("two-1");
      twoRef.current?.classList.add("two-2");
      threeRef.current?.classList.add("two-3");
      fourRef.current?.classList.add("two-4");
      fiveRef.current?.classList.add("two-5");
      sixRef.current?.classList.add("two-6");
    }
    if (props.number === 3) {
      oneRef.current?.classList.add("three-1");
      twoRef.current?.classList.add("three-2");
      threeRef.current?.classList.add("three-3");
      fourRef.current?.classList.add("three-4");
      fiveRef.current?.classList.add("three-5");
      sixRef.current?.classList.add("three-6");
    }
    if (props.number === 4) {
      oneRef.current?.classList.add("four-1");
      twoRef.current?.classList.add("four-2");
      threeRef.current?.classList.add("four-3");
      fourRef.current?.classList.add("four-4");
      fiveRef.current?.classList.add("four-5");
      sixRef.current?.classList.add("four-6");
    }
    if (props.number === 5) {
      oneRef.current?.classList.add("five-1");
      twoRef.current?.classList.add("five-2");
      threeRef.current?.classList.add("five-3");
      fourRef.current?.classList.add("five-4");
      fiveRef.current?.classList.add("five-5");
      sixRef.current?.classList.add("five-6");
    }
    if (props.number === 6) {
      oneRef.current?.classList.add("six-1");
      twoRef.current?.classList.add("six-2");
      threeRef.current?.classList.add("six-3");
      fourRef.current?.classList.add("six-4");
      fiveRef.current?.classList.add("six-5");
      sixRef.current?.classList.add("six-6");
    }
    if (props.number === 7) {
      oneRef.current?.classList.add("seven-1");
      twoRef.current?.classList.add("seven-2");
      threeRef.current?.classList.add("seven-3");
      fourRef.current?.classList.add("seven-4");
      fiveRef.current?.classList.add("seven-5");
      sixRef.current?.classList.add("seven-6");
    }
    if (props.number === 8) {
      oneRef.current?.classList.add("eight-1");
      twoRef.current?.classList.add("eight-2");
      threeRef.current?.classList.add("eight-3");
      fourRef.current?.classList.add("eight-4");
      fiveRef.current?.classList.add("eight-5");
      sixRef.current?.classList.add("eight-6");
    }
    if (props.number === 9) {
      oneRef.current?.classList.add("nine-1");
      twoRef.current?.classList.add("nine-2");
      threeRef.current?.classList.add("nine-3");
      fourRef.current?.classList.add("nine-4");
      fiveRef.current?.classList.add("nine-5");
      sixRef.current?.classList.add("nine-6");
    }
    if (props.number === 0) {
      oneRef.current?.classList.add("zero-1");
      twoRef.current?.classList.add("zero-2");
      threeRef.current?.classList.add("zero-3");
      fourRef.current?.classList.add("zero-4");
      fiveRef.current?.classList.add("zero-5");
      sixRef.current?.classList.add("zero-6");
    }
  }, [props.number]);
  return (
    <div className="grid grid-cols-2 grid-rows-3">
      <div
        id="one"
        className="h-16 w-16 bg-indigo-300 transition-all"
        ref={oneRef}
      ></div>
      <div
        id="two"
        className="h-16 w-16 bg-indigo-300 transition-all"
        ref={twoRef}
      ></div>
      <div
        id="three"
        className="h-16 w-16 bg-indigo-300 transition-all"
        ref={threeRef}
      ></div>
      <div
        id="four"
        className="h-16 w-16 bg-indigo-300 transition-all"
        ref={fourRef}
      ></div>
      <div
        id="five"
        className="h-16 w-16 bg-indigo-300 transition-all"
        ref={fiveRef}
      ></div>
      <div
        id="six"
        className="h-16 w-16 bg-indigo-300 transition-all"
        ref={sixRef}
      ></div>
    </div>
  );
};

export default Digit;
