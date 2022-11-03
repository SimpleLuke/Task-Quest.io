import PrologueScene from "./scenes/prologue.scene";
import CombatScene from "./scenes/combat.scene";

const App = () => {
  const scene = "prologue";
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {(() => {
        switch (scene) {
          case "prologue":
            return <PrologueScene />;
          case "combat":
            return <CombatScene />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default App;
