import { speeds } from "./text.utilies";

const OnePrologue = [
  { speed: speeds.slow, string: "Oh, hello!" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "Have you seen my pet" },
  { speed: speeds.fast, string: "frog", classes: ["green"] },
  { speed: speeds.normal, string: "around?" },
];

const TwoPrologue = [
  { speed: speeds.fast, string: "Welcome back!" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "My" },
  { speed: speeds.slow, string: "Hero,", classes: ["red"] },
  { speed: speeds.normal, string: "we are waiting for you" },
  { speed: speeds.slow, string: "..." },
];

export const prologueText = [OnePrologue, TwoPrologue];
