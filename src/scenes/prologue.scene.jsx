import { Fragment, useEffect, useState } from "react";
// import TypeWriter from "../components/text-box/TypeWriter";
// import Typewriter from "typewriter-effect";

const speeds = {
  pause: 500, //Higher number = longer delay
  slow: 120,
  normal: 90,
  fast: 40,
  superFast: 10,
};

const textLines = [
  { speed: speeds.slow, string: "Oh, hello!" },
  { speed: speeds.pause, string: "", pause: true },
  { speed: speeds.normal, string: "Have you seen my pet" },
  { speed: speeds.fast, string: "frog", classes: "green" },
  { speed: speeds.normal, string: "around?" },
];

// const characters = [];

const PrologueScene = () => {
  //   const [text, setText] = useState([]);
  //   const splitText = () => {
  //     const characters = textLines.map((line, index) => {
  //       //   console.log(index, textLines.length - 1);
  //       if (index < textLines.length - 1) {
  //         line.string += " ";
  //       }
  //       const chars = line.string.split("");
  //       //   console.log(chars);
  //       return chars.map((char, index) => {
  //         return {
  //           char: char,
  //           isReveal: false,
  //           isSpace: char === " " && !line.pause,
  //           delayAfter: line.speed,
  //           classes: line.classes || "",
  //         };
  //       });
  //     });
  //     // console.log(characters);
  //     setText(characters);
  //     return characters;
  //   };

  //   useEffect(() => {
  //     splitText();
  //   }, []);

  //   useEffect(() => {
  //     console.log(text);
  //     const revealOneCharacter = (list) => {
  //       console.log(list);
  //       if (list) {
  //         const next = list.splice(0, 1)[0];
  //         console.log(next);
  //         next.isReveal = true;
  //         const delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

  //         if (list.length > 0) {
  //           setTimeout(function () {
  //             revealOneCharacter(list);
  //           }, delay);
  //         }
  //       }
  //     };
  //     if (text.length > 0) {
  //       revealOneCharacter(text);
  //     }
  //   }, [text]);
  return (
    <Fragment>
      <div className="text">
        {/* <TypeWriter text={`Hello World`} /> */}
        {/* <Typewriter
          options={{
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString("A simple yet powerful native javascript")
              .pauseFor(300)
              .typeString(
                "<strong>JS</strong> plugin for a cool typewriter effect and "
              )
              .typeString(
                '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
              )
              .pauseFor(1000)
              .start();
          }}
        /> */}
        {/* {text.map((line) =>
          line.map((char, index) => (
            <span
              key={index}
              className={`${char.isReveal ? "reveal" : ""} ${char.classes}`}
            >
              {char.char}
            </span>
          ))
        )} */}
        {/* <svg
          className="corner"
          viewBox="0 0 65 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M35 3.5L65 6.5V62L0 0L35 3.5Z" fill="white" />
        </svg> */}
      </div>
    </Fragment>
  );
};

export default PrologueScene;
