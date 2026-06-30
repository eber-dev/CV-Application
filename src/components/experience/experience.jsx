import styles from './experience.module.css';
import { useState } from 'react';

function Experience() {
    const [datos, setDatos] = useState({
        institucion: '',
        degree: '',
        graduation_date: '',
    });

    const enviado = (e) => {
        e.preventDefault();
        setMostrarInfo(true);
    };

    const cambio = (e) => {
        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value,
        });
    };

    const [mostrarInfo, setMostrarInfo] = useState(false);

    const handleEditar = () => {
        setMostrarInfo(false);
    };

    return (
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>Educational Experience</h1>
            {!mostrarInfo ? (
                <form onSubmit={enviado} className={styles.formulario}>
                    <div>
                        <label htmlFor="institucion_name">
                            Intitucion Name:{' '}
                        </label>
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
            ) : (
                <div className={styles.mostrar}>
                    <p>
                        <strong>Intitucion Name:</strong>
                        <br />
                        {datos.institucion}
                    </p>
                    <p>
                        <strong>Degree:</strong>
                        <br />
                        {datos.degree}
                    </p>
                    <p>
                        <strong>Graduation Date:</strong>
                        <br />
                        {datos.graduation_date}
                    </p>

                    <button onClick={handleEditar} className={styles.editar}>
                        Editar
                    </button>
                </div>
            )}
        </div>
    );
}

export default Experience;
