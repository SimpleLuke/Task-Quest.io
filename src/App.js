import CombatScene from "./scenes/combat.scene";

const App = () => {
  const scene = "combat";
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {(() => {
        switch (scene) {
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
