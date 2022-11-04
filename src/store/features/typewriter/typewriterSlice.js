import { createSlice } from "@reduxjs/toolkit";

const sortText = (textLines) => {
  const characters = [];
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
  return characters;
};

const initialState = {
  characters: [],
  delay: 0,
  classNames: "",
  textOrder: 0,
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
    showText: (state, { payload }) => {
      state.characters = sortText(payload);
    },
    nextText: (state) => {
      state.textOrder += 1;
    },
    resetTextOrder: (state) => {
      state.textOrder = 0;
    },
  },
});

// console.log(healthSlice);

export default typewriterSlice.reducer;
export const { revealOneCharacter, showText, nextText, resetTextOrder } =
  typewriterSlice.actions;
