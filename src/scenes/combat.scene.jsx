import { Fragment } from "react";
import { useDispatch } from "react-redux";
import Monster from "../components/monster/monster";
import HealthBar from "../components/health-bar/health-bar";
import { increaseHp, decreaseHp } from "../store/features/health/healthSlice";

const CombatScene = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CombatScene;
