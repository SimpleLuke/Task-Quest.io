import npc2 from "../../assets/characters/npc2.png";
import shadow from "../../assets/characters/shadow.png";

const Monster = ({ isAttack, isDead }) => {
  return (
    <div
      className={`Character ${isAttack ? "animate-blink" : ""} ${
        isDead ? "animate-fade-out" : ""
      }`}
    >
      <img className={`Character_shadow pixelart `} src={shadow} alt="Shadow" />
      <img
        className="Character_spritesheet pixelart "
        src={npc2}
        alt="Monster"
      />
    </div>
  );
};

export default Monster;
