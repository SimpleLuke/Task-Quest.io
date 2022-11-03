import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  revealOneCharacter,
  showText,
} from "../../store/features/typewriter/typewriterSlice";

const TypeWriter = ({ scene }) => {
  const dispatch = useDispatch();
  const count = useRef(0);
  const { characters, delay, textOrder } = useSelector(
    (store) => store.typewriter
  );

  useEffect(() => {
    // console.log(textOrder);
    dispatch(showText(scene[textOrder]));
    count.current = 0;
  }, [textOrder]);

  useEffect(() => {
    // console.log("revealed");
    const timeoutId = setTimeout(() => {
      if (count.current <= characters.length - 1) {
        dispatch(revealOneCharacter(count.current));
        count.current++;
        // console.log(delay);
      }
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [count.current, characters, textOrder]);

  return (
    <div className="text w-[80%] text-6xl">
      {characters.map((character, index) => {
        return (
          <span
            key={index}
            className={`${
              character.isReveal ? "revealed" : ""
            } ${character.classes.join(" ")}`}
          >
            {character.character}
          </span>
        );
      })}
      {/* <svg
    className="corner"
    viewBox="0 0 65 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M35 3.5L65 6.5V62L0 0L35 3.5Z" fill="white" />
  </svg> */}
    </div>
  );
};

export default TypeWriter;
