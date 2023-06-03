import React, { useState } from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);

    const Decremento = () => {
        setCount(prevCount => prevCount -1);
    };

    const Reiniciar = () => {
        setCount(0);
    };

    const Incremento = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="contenedor">
            <h1 className='titulo'>REACT CONTADOR</h1>
            <div className="contenedor-2">
                <div className="contenedor-3">
                <h2>{count}</h2>
                <div className="contenedor-4">
                <button onClick={Decremento}>-</button>
                <button onClick={Reiniciar}>Reiniciar</button>
                <button onClick={Incremento}>+</button>
                </div>
                </div>
            </div>
        </div>
      );

}

export default Contador;