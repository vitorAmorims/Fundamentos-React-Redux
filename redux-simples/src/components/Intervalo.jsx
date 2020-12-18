import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numeros";

const Intervalo = (props) => {
  console.log(props);
  const { min, max, alterarMin, alterarMax } = props;
  // alterarMin(30)
  return (
    <div className="intervalo">
      <span>Minimo:</span>
      <input
        type="number"
        value={min}
        onChange={(e) => alterarMin(+e.target.value)}
      />
      <span>Máximo:</span>
      <input
        type="number"
        value={max}
        onChange={(e) => alterarMax(+e.target.value)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMax(novoNumero) {
      //action creator -> action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action); //esta action será passado para todos os reducers
    },
    alterarMin(novoNumero) {
      //action creator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action); //esta action será passado para todos os reducers
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervalo);
