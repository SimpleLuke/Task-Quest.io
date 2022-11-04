import { speeds } from "./text.utilies";

const One = [
  { speed: speeds.normal, string: "What is your" },
  { speed: speeds.slow, string: " mission", classes: ["red"] },
  { speed: speeds.normal, string: "?" },
];

const Two = [
  { speed: speeds.slow, string: "WOW!!!" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "That is a tough" },
  { speed: speeds.normal, string: "ENEMY!", classes: ["purple"] },
  {
    speed: speeds.normal,
    string: "What steps do we need in order to take it down?",
    pause: true,
  },
  { speed: speeds.fast, string: "I think we need a lot of" },
  { speed: speeds.slow, string: "SMALL STEPS", classes: ["yellow"] },
  { speed: speeds.normal, string: "would be great!" },
];

const Three = [
  { speed: speeds.fast, string: "Great!" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "And more" },
  { speed: speeds.slow, string: "...?" },
];

export const missionText = [One, Two, Three];
