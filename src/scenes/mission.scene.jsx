import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  nextText,
  resetTextOrder,
} from "../store/features/typewriter/typewriterSlice";
import {
  setTaskName,
  setTaskSteps,
  removeStep,
} from "../store/features/task/taskSlice";
import { setScene } from "../store/features/scene/sceneSlice";

import TypeWriter from "../components/text-box/TypeWriter";
import { missionText } from "../text/mission.text";

const MissionScene = () => {
  const dispatch = useDispatch();
  const inputText = useRef("");
  const { textOrder } = useSelector((store) => store.typewriter);
  const { task } = useSelector((store) => store.task);

  const isLastText = textOrder === missionText.length - 1;

  const setTaskNameHandler = () => {
    if (inputText.current.value) {
      dispatch(nextText());
      dispatch(setTaskName(inputText.current.value));
      inputText.current.value = "";
    }
  };

  const setTaskStepsHandler = () => {
    if (!isLastText) {
      dispatch(nextText());
    }
    dispatch(setTaskSteps(inputText.current.value));
    inputText.current.value = "";
  };

  const removeStepHandler = (event) => {
    console.log(event.target.id);
    // const index = Number(event.target.__reactFiber$4u3w6ewzlcl.key);
    // console.log(index);
    dispatch(removeStep(event.target.id));
  };

  const confirmHandler = () => {
    dispatch(setScene("combat"));
    dispatch(resetTextOrder());
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  // useEffect(()=>{

  // },[task.steps])

  return (
    <Fragment>
      <TypeWriter scene={missionText} />
      <form className="w-4/5 flex" onSubmit={onSubmitHandler}>
        <input
          ref={inputText}
          className="h-16 w-4/6 text-4xl p-4 "
          type="text"
        />
        {textOrder === 0 && (
          <button
            className="h-16 w-2/6 bg-green-300 text-2xl"
            onClick={setTaskNameHandler}
          >
            SET
          </button>
        )}
        {textOrder !== 0 && (
          <button
            className="h-16 w-1/6 bg-green-300 text-2xl"
            onClick={setTaskStepsHandler}
          >
            ADD
          </button>
        )}
        {textOrder !== 0 && (
          <button
            className="h-16 w-1/6 bg-red-600 text-2xl"
            onClick={confirmHandler}
          >
            GO
          </button>
        )}
      </form>

      {task.items.length !== 0 && (
        <div className="mt-10 w-[80%]">
          <ul>
            {task.items.map((step, index) => (
              <li
                key={index}
                className="text-4xl tracking-wider text-black cursor-default mt-1 group"
              >
                - {step}{" "}
                <span
                  id={index}
                  className="text-[0px] text-red-600 cursor-pointer group-hover:text-3xl"
                  onClick={removeStepHandler}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <button
        className="text-6xl text-white border-4 p-4 mt-4 text-center"
        onClick={
          isLastText
            ? () => dispatch(setScene("combat"))
            : () => dispatch(nextText())
        }
      >
        {isLastText ? "CHALLENEGE" : "NEXT"}
      </button> */}
    </Fragment>
  );
};

export default MissionScene;
