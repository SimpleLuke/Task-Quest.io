import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Monster from "../components/monster/monster";
import HealthBar from "../components/health-bar/health-bar";
import { increaseHp, decreaseHp } from "../store/features/health/healthSlice";
import { finishStep } from "../store/features/task/taskSlice";

const CombatScene = () => {
  const dispatch = useDispatch();
  const [acttack, setActack] = useState(10);
  const { task, finishedSteps } = useSelector((state) => state.task);
  const { name, steps } = task;
  const { maxHp } = useSelector((state) => state.health);

  useEffect(() => {
    const power = maxHp / steps.length;
    console.log(power);
    setActack(power);
  }, []);

  const finishStepHandler = (event) => {
    dispatch(decreaseHp(acttack));
    dispatch(finishStep(event.target.id));
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-6xl">{name}</h1>
      </div>
      <div className="mt-[-100px]">
        <Monster />
        <HealthBar />
        <div>
          <button className="w-10" onClick={() => dispatch(decreaseHp(10))}>
            -
          </button>
          <button className="w-10" onClick={() => dispatch(increaseHp(10))}>
            +
          </button>
        </div>
      </div>
      {steps.length !== 0 && (
        <div className="mt-10 text-center">
          <ul>
            {finishedSteps.map((step, index) => (
              <li
                key={index}
                className="text-4xl leading-none tracking-wider text-black cursor-default mt-1 group"
              >
                <s>{step}</s>
              </li>
            ))}
            {steps.map((step, index) => (
              <li
                key={index}
                className="text-4xl leading-none tracking-wider text-black cursor-default mt-1 group"
              >
                {step}{" "}
                <span
                  id={index}
                  className="text-[0px] leading-none text-green-600 mr-2 cursor-pointer group-hover:text-3xl"
                  onClick={finishStepHandler}
                >
                  &#10004;
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default CombatScene;
