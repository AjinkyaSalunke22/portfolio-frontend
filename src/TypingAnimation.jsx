import { TypeAnimation } from "react-type-animation";

export function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Programmer",
        1000,
        "Developer",
        1000,
        "Software Engineer",
        1000,
        "Code Wizard",
        1000,
        "Full-Stack Developer",
        1000,
        "Backend Engineer",
        1000,
        "Frontend Engineer",
        1000,
        "Problem Solver",
        1000,
        "Agentic AI User",
        1000,
        "Curious",
        1000,
        "Fond of Algos",
        1000,
        "Eager to Learn",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
      className="text-blue-500 dark:text-blue-400"
    />
  );
}