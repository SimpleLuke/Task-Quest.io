import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Monster from "../components/monster/monster";
import HealthBar from "../components/health-bar/health-bar";
import {
  increaseHp,
  decreaseHp,
  initializeHp,
} from "../store/features/health/healthSlice";
import { finishStep, initializeTask } from "../store/features/task/taskSlice";
import { setScene } from "../store/features/scene/sceneSlice";

const CombatScene = () => {
  const dispatch = useDispatch();
  const [acttack, setActack] = useState(10);
  const [isAttack, setIsActtack] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const { task, finishedSteps } = useSelector((state) => state.task);
  const { name, steps } = task;
  const { maxHp, currentHp } = useSelector((state) => state.health);

  useEffect(() => {
    const power = maxHp / steps.length;
    console.log(power);
    setActack(power);
  }, []);

  useEffect(() => {
    if (currentHp === 0) {
      setIsDead(true);
    }
    const timeoutId = setTimeout(() => setIsActtack(false), 1000);
    return () => clearTimeout(timeoutId);
  }, [isAttack, currentHp]);

  const finishStepHandler = (event) => {
    dispatch(decreaseHp(acttack));
    dispatch(finishStep(event.target.id));
    setIsActtack(true);
  };

  const nextEnemyHandler = () => {
    dispatch(setScene("mission"));
    dispatch(initializeTask());
    dispatch(initializeHp());
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-6xl">{name}</h1>
      </div>
      <div className="mt-[-100px]">
        <Monster isAttack={isAttack} isDead={isDead} />
        <HealthBar />
        {/* <div>
          <button className="w-10" onClick={() => dispatch(decreaseHp(10))}>
            -
          </button>
          <button className="w-10" onClick={() => dispatch(increaseHp(10))}>
            +
          </button>
        </div> */}
      </div>
      {(steps.length !== 0 || finishStep !== 0) && (
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
      {isDead && (
        <button
          className="mt-8 bg-red-500 text-white p-3 rounded-md text-2xl font-bold leading-10 "
          onClick={nextEnemyHandler}
        >
          NEXT ENEMY
        </button>
      )}
    </Fragment>
  );
};

export default CombatScene;
