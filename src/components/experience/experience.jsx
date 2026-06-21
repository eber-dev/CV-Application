import './experience.css';
import { useState } from 'react';

function Experience() {
    const [datos, setDatos] = useState({
        institucion: '',
        degree: '',
        graduation_date: '',
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
            <h1>Educational Experience</h1>
            <form onSubmit={enviado}>
                <div>
                    <label htmlFor="institucion_name">Intitucion Name: </label>
                    <input
                        type="text"
                        name="institucion"
                        id="institucion_name"
                        value={datos.institucion}
                        onChange={cambio}
                    />
                </div>
                <div>
                    <label htmlFor="grado">Degree:</label>
                    <input
                        type="text"
                        name="degree"
                        id="grado"
                        value={datos.degree}
                        onChange={cambio}
                    />
                </div>
                <div>
                    <label htmlFor="graduation">Graduation Date: </label>
                    <input
                        type="date"
                        name="graduation_date"
                        id="graduation"
                        value={datos.graduation_date}
                        onChange={cambio}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Experience;
