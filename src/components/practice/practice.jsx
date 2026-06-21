import './practice.css';
import { useState } from 'react';

function Practice() {
    const [datos, setDatos] = useState({
        company: '',
        posicion: '',
        responsabilities: '',
    });

    const enviado = (e) => {
        e.preventDefault();
    };

    const cambio = (e) => {
        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Practical Experience</h1>
            <form onSubmit={enviado}>
                <div>
                    <label htmlFor="company">Company Name: </label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        onChange={cambio}
                    />
                </div>
                <div>
                    <label htmlFor="posicion">Posicion Title: </label>
                    <input
                        type="text"
                        name="posicion"
                        id="posicion"
                        onChange={cambio}
                    />
                </div>
                <div>
                    <label htmlFor="responsabilities">
                        Main Responsabilities:
                    </label>
                    <input
                        type="text"
                        name="responsabilities"
                        id="responsabilities"
                        onChange={cambio}
                    />
                </div>
                <div>
                    <label htmlFor="start">Start Employment</label>
                    <input
                        type="text"
                        name="start"
                        id="start"
                        onChange={cambio}
                    />
                </div>
                <div>
                    <label htmlFor="finish">Finish Employment</label>
                    <input
                        type="text"
                        name="finish"
                        id="finish"
                        onChange={cambio}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Practice;
