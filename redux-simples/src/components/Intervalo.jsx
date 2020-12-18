import "./Intervalo.css";
import React from "react";

export default (props) => {
  const { min, max, onMinChanged, onMaxChanged } = props;
  return (
    <div className="intervalo">
      <span>Minimo:</span>
      <input
        type="number"
        value={min}
        onChange={(e) => onMinChanged(+e.target.value)}
      />
      <span>Máximo:</span>
      <input
        type="number"
        value={max}
        onChange={(e) => onMaxChanged(+e.target.value)}
      />
    </div>
  );
};
