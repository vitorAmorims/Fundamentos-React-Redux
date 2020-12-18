import React from 'react';

export default props => {
    const { min,max } = props;
    const aleatorio = Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{ aleatorio }</strong>
            </span>
        </div>
    )
}