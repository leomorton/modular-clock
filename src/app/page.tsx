"use client";
import { useState, useEffect } from "react";
import Digit from "~/app/components/Digit";
import Divider from "~/app/components/Divider";

export default function HomePage() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center gap-4 bg-gradient-to-b from-black to-indigo-950 text-white">
      <Digit number={Math.floor((time.getHours() / 10) % 10)} />
      <Digit number={Math.floor((time.getHours() / 1) % 10)} />
      <Divider visible={Boolean(time.getSeconds() % 2)} />
      <Digit number={Math.floor((time.getMinutes() / 10) % 10)} />
      <Digit number={Math.floor((time.getMinutes() / 1) % 10)} />
      <Divider visible={Boolean(time.getSeconds() % 2)} />
      <Digit number={Math.floor((time.getSeconds() / 10) % 10)} />
      <Digit number={Math.floor((time.getSeconds() / 1) % 10)} />
    </main>
  );
}
