"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Hello World!",
        2000, // shows text, waits 2s
        "This is my portfolio.",
        2000, // then new text, waits 2s
        "I'm passionate about UI/UX",
        2000, // then new text, waits 2s
        "I want do experimental things",
        2000, // then new text, waits 2s
      ]}
      wrapper="h2" // element wrapper
      speed={50} // typing speed in ms
      style={{ fontSize: "35px", display: "inline-block", minWidth: "300px"}}
      repeat={Infinity} // loop forever
    />
  );
}
