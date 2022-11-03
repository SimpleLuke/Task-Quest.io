import { Fragment } from "react";
import { useDispatch } from "react-redux";

import { nextText } from "../store/features/typewriter/typewriterSlice";

import TypeWriter from "../components/text-box/TypeWriter";
import { prologueText } from "../text/prologue.text";

const PrologueScene = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <TypeWriter scene={prologueText} />
      <button
        className="text-6xl text-white p-4"
        onClick={() => dispatch(nextText())}
      >
        NEXT
      </button>
    </Fragment>
  );
};

export default PrologueScene;
