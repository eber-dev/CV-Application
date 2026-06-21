import './seccion1.css';
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
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Personal Information</h1>
            <form onSubmit={enviado}>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default General;
