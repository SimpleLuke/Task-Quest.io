import { createSlice } from "@reduxjs/toolkit";

var speeds = {
  pause: 500, //Higher number = longer delay
  slow: 120,
  normal: 90,
  fast: 40,
  superFast: 10,
};

var textLines = [
  { speed: speeds.slow, string: "Oh, hello!" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "Have you seen my pet" },
  { speed: speeds.fast, string: "frog", classes: ["green"] },
  { speed: speeds.normal, string: "around?" },
];

var characters = [];
textLines.forEach((line, index) => {
  if (index < textLines.length - 1) {
    line.string += " ";
  }

  line.string.split("").forEach((character) => {
    characters.push({
      character: character,
      isSpace: character === " " && !line.pause,
      delayAfter: line.speed,
      isReveal: false,
      classes: line.classes || [],
    });
  });
});

const initialState = {
  characters: characters,
  delay: 0,
  classNames: "",
};

const typewriterSlice = createSlice({
  name: "typewriter",
  initialState,
  reducers: {
    revealOneCharacter: (state, { payload }) => {
      state.characters[payload].isReveal = true;
      state.delay =
        state.characters[payload].isSpace && !state.characters[payload].pause
          ? 0
          : state.characters[payload].delayAfter;
    },
  },
});

// console.log(healthSlice);

export default typewriterSlice.reducer;
export const { revealOneCharacter } = typewriterSlice.actions;
