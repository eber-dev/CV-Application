import styles from './practice.module.css';
import { useState } from 'react';

function Practice() {
    const [datos, setDatos] = useState({
        company: '',
        posicion: '',
        responsabilities: '',
        start: '',
        finish: '',
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
            <h1 className={styles.titulo}>Practical Experience</h1>
            {!mostrarInfo ? (
                <form onSubmit={enviado} className={styles.formulario}>
                    <div>
                        <label htmlFor="company">Company Name: </label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            value={datos.company}
                            onChange={cambio}
                        />
                    </div>
                    <div>
                        <label htmlFor="posicion">Posicion Title: </label>
                        <input
                            type="text"
                            name="posicion"
                            id="posicion"
                            value={datos.posicion}
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
                            value={datos.responsabilities}
                            onChange={cambio}
                        />
                    </div>
                    <div>
                        <label htmlFor="start">Start Employment</label>
                        <input
                            type="text"
                            name="start"
                            id="start"
                            value={datos.start}
                            onChange={cambio}
                        />
                    </div>
                    <div>
                        <label htmlFor="finish">Finish Employment</label>
                        <input
                            type="text"
                            name="finish"
                            id="finish"
                            value={datos.finish}
                            onChange={cambio}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className={styles.mostrar}>
                    <p>
                        <strong>Company Name:</strong>
                        <br />
                        {datos.company}
                    </p>
                    <p>
                        <strong>Posicion Title:</strong>
                        <br />
                        {datos.posicion}
                    </p>
                    <p>
                        <strong>Main Responsabilities:</strong>
                        <br />
                        {datos.responsabilities}
                    </p>
                    <p>
                        <strong>Start Employment:</strong>
                        <br />
                        {datos.start}
                    </p>
                    <p>
                        <strong>Finish Employment: </strong>
                        <br />
                        {datos.finish}
                    </p>

                    <button onClick={handleEditar} className={styles.editar}>
                        Editar
                    </button>
                </div>
            )}
        </div>
    );
}

export default Practice;
