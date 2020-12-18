import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

const Intervalo = (props) => {
  // console.log(props);
  const { min, max } = props;
  return (
    <div className="intervalo">
      <span>Minimo:</span>
      <input type="number" value={ min } readOnly />
      <span>Máximo:</span>
      <input type="number" value={ max } readOnly />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Intervalo);
