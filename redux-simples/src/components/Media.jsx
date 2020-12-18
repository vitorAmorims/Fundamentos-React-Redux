import React from 'react';
import { connect } from 'react-redux'

const Media = props => {
    // console.log(props)
    const { min, max } = props;
    return (
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{ (max + min) / 2 }</strong>
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

export default connect(mapStateToProps)(Media);