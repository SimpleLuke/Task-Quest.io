import { speeds } from "./text.utilies";

const OnePrologue = [
  { speed: speeds.normal, string: "Welcome back !" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "My" },
  { speed: speeds.slow, string: "Hero", classes: ["yellow"] },
  { speed: speeds.slow, string: "!" },
  { speed: speeds.normal, string: "Where have you been ?" },
];

const TwoPrologue = [
  { speed: speeds.fast, string: "We need you" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "..." },
  { speed: speeds.slow, string: "NOW !!!", classes: ["red"] },
  { speed: speeds.normal, string: "", pause: true },
  { speed: speeds.normal, string: "Come to see your" },
  { speed: speeds.slow, string: "ENEMY !", classes: ["purple"] },
];

export const prologueText = [OnePrologue, TwoPrologue];
