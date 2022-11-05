import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import PrologueScene from "./scenes/prologue.scene";
import MissionScene from "./scenes/mission.scene";
import CombatScene from "./scenes/combat.scene";

const App = () => {
  const [scene, setScene] = useState("prologue");
  const { currentScene } = useSelector((state) => state.scene);

  useEffect(() => {
    // console.log("scene change", scene);
    setScene(currentScene);
  }, [currentScene]);

  return (
    <div className="flex flex-col pt-32 items-center ">
      {scene === "prologue" && <PrologueScene />}
      {scene === "mission" && <MissionScene />}
      {scene === "combat" && <CombatScene />}
    </div>
  );
};

export default App;
