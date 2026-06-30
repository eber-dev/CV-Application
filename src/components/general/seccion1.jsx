import styles from './seccion1.module.css';
import { useState } from 'react';

function General() {
    const [datos, setDatos] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
    });

    const enviado = (e) => {
        e.preventDefault();
        setMostrarInfo(true);
    };

    const handleChange = (e) => {
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
            <h1 className={styles.titulo}>Personal Information</h1>
            {!mostrarInfo ? (
                <form onSubmit={enviado} className={styles.formulario}>
                    <div>
                        <label htmlFor="first_name">Fisrt Name:</label>
                        <input
                            type="text"
                            id="first_name"
                            name="name"
                            value={datos.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="second_name">Second Name: </label>
                        <input
                            type="text"
                            id="second_name"
                            name="lastname"
                            value={datos.lastname}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone: </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={datos.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="correo">Email: </label>
                        <input
                            type="email"
                            id="correo"
                            name="email"
                            value={datos.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="enviar">
                        Submit
                    </button>
                </form>
            ) : (
                <div className={styles.mostrar}>
                    <p>
                        <strong>First Name:</strong>
                        <br />
                        {datos.name}
                    </p>
                    <p>
                        <strong>Second Name:</strong>
                        <br />
                        {datos.lastname}
                    </p>
                    <p>
                        <strong>Phone:</strong>
                        <br />
                        {datos.phone}
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <br />
                        {datos.email}
                    </p>

                    <button onClick={handleEditar} className={styles.editar}>
                        Editar
                    </button>
                </div>
            )}
        </div>
    );
}

export default General;
