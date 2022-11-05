import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { renderFills } from "../../store/features/health/healthSlice";

const HealthBar = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(["#57e705", "#6aff03"]);
  const { hpFill, currentHp } = useSelector((store) => store.health);

  //   Render HP bar fills
  useEffect(() => {
    dispatch(renderFills());
  }, [currentHp, dispatch]);

  //   Change fill color by current HP
  useEffect(() => {
    if (hpFill > 50) {
      setColor(["#57e705", "#6aff03"]);
    }
    if (hpFill <= 50) {
      setColor(["#d6ed20", "#d8ff48"]);
    }
    if (hpFill <= 25) {
      setColor(["#ec290a", "#ff3818"]);
    }
  }, [hpFill]);

  return (
    <svg
      className="w-80 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 38 9"
      shapeRendering="crispEdges"
    >
      <path
        stroke="#222034"
        d="M2 0h34M1 1h1M36 1h1M0 2h1M3 2h32M37 2h1M0 3h1M2 3h1M35 3h1M37 3h1M0 4h1M2 4h1M35 4h1M37 4h1M0 5h1M2 5h1M35 5h1M37 5h1M0 6h1M3 6h32M37 6h1M1 7h1M36 7h1M2 8h34"
      />
      <path stroke="#ffffff" d="M2 1h34" />
      <path
        stroke="#f2f2f5"
        d="M1 2h2M35 2h2M1 3h1M36 3h1M1 4h1M36 4h1M1 5h1M36 5h1M1 6h2M35 6h2M2 7h34"
      />
      <path stroke="#323c39" d="M3 3h32" />
      <path stroke="#494d4c" d="M3 4h32M3 5h32" />
      {/* <!-- Fill container --> */}
      <svg x="3" y="2.5" width="32" height="3">
        <rect
          className="transition-all duration-100 ease-linear"
          height="3"
          width={`${hpFill}%`}
          fill={color[0]}
        />
        <rect
          className="transition-all duration-100 ease-linear"
          height="1"
          width={`${hpFill}%`}
          fill={color[1]}
        />
      </svg>
    </svg>
  );
};

export default HealthBar;
