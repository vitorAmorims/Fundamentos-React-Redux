import React from 'react';
import { connect } from 'react-redux';

const Sorteio = props => {
    // console.log(props)
    const { min, max } = props;
    const aleatorio = Math.floor(Math.random() * (max - min) + min)
    return (
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{ aleatorio }</strong>
            </span>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}
export default connect(mapStateToProps)(Sorteio);