import React from 'react';

export default props => {
    const { min,max } = props;
    return (
        <div>
            <span>
                <span>Resultado:</span>
                <strong>{ max + min }</strong>
            </span>
        </div>
    )
}