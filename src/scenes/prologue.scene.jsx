import { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { revealOneCharacter } from "../store/features/typewriter/typewriterSlice";

const PrologueScene = () => {
  const dispatch = useDispatch();
  const count = useRef(0);
  const { characters } = useSelector((store) => store.typewriter);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count.current < characters.length - 1) {
        dispatch(revealOneCharacter(count.current));
        count.current++;
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [count.current]);

  return (
    <Fragment>
      <div className="text">
        {characters.map((character, index) => {
          console.log(character);
          return (
            <span
              key={index}
              className={`${character.isReveal ? "revealed" : ""}`}
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
    </Fragment>
  );
};

export default PrologueScene;
