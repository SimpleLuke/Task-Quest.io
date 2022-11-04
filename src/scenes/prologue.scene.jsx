import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  nextText,
  resetTextOrder,
} from "../store/features/typewriter/typewriterSlice";
import { setScene } from "../store/features/scene/sceneSlice";

import TypeWriter from "../components/text-box/TypeWriter";
import { prologueText } from "../text/prologue.text";

const PrologueScene = () => {
  const dispatch = useDispatch();
  const { textOrder } = useSelector((store) => store.typewriter);

  const isLastText = textOrder === prologueText.length - 1;

  const nextSceneHandler = () => {
    dispatch(setScene("mission"));
    dispatch(resetTextOrder());
  };

  return (
    <Fragment>
      <TypeWriter scene={prologueText} />
      <button
        className="text-6xl text-white border-4 p-4 mt-4 text-center"
        onClick={isLastText ? nextSceneHandler : () => dispatch(nextText())}
      >
        {isLastText ? "CHALLENEGE" : "NEXT"}
      </button>
    </Fragment>
  );
};

export default PrologueScene;
