import npc2 from "../../assets/characters/npc2.png";
import shadow from "../../assets/characters/shadow.png";

const Monster = () => {
  return (
    <div className="Character">
      <img className="Character_shadow pixelart" src={shadow} alt="Shadow" />
      <img
        className="Character_spritesheet pixelart "
        src={npc2}
        alt="Monster"
      />
    </div>
  );
};

export default Monster;
