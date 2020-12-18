import './Intervalo.css';
import React from 'react'

export default props => {
    return (
        <div className="intervalo">
            <span>Minimo:</span>
            <input type="number" value={0} readOnly/>
            <span>Máximo:</span>
            <input type="number" value={10} readOnly/>
        </div>
    )
}