import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { UsersMap } from './UsersMap';
export const AdminView = () => {
    const [ state, setstate ] = useState(false);
    const [ users, setUsers ] = useState([])
    const [ values, handleInputChange, reset ] = useForm({
        userName: '',
        password: '',
        role: 'employed',
    });
    const { userName, password, role } = values;
    useEffect(() => {
        fetch('https://restaurant-bac.herokuapp.com/api/users/get')
            .then(response => response.json())
            .then(({ users }) => setUsers(users))
    }, [])

    const handleAddNewUser = (e) => {
        e.preventDefault();
        const msg = role === 'admin' ? "Nuevo Administrador Añadido" : "Nuevo Empleado Añadido";
        fetch('https://restaurant-bac.herokuapp.com/api/users/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(({uid}) => {
                setUsers([...users, {
                    ...values,
                    uid,
                }]);
                Swal.fire({
                    icon: 'success',
                    text: msg,
                });
            })
        setstate(false);
        reset();
    }


    return (
        <>
            <article className="screen_manage_title">/
                <h2>CONTROL DE USUARIO </h2>
            </article>
            <article className="screen_manage_content">
                <button
                    className={state ? 'btn-add cancel' : 'btn-add'}
                    onClick={() => setstate(!state)}
                >
                    {
                        state ? 'Cancelar' : 'Nuevo Usuario'
                    }

                </button>
                {
                    state &&
                    <form
                        onSubmit={handleAddNewUser}
                    >
                        <div className="section-input">
                            <label>Nombre De usuario: </label>
                            <input
                                type="text"
                                id="user-name"
                                name="userName"
                                value={userName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="section-input">
                            <label>Contraseña: </label>
                            <input
                                type="password"
                                id="user-password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="section-input">
                            <label>Rol: </label>
                            <select
                                name="role"
                                onChange={handleInputChange}
                                defaultValue={role}
                            >
                                <option value="admin">Administrador</option>
                                <option value="employed">Empleado</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Registrar"
                            className="btn btn-primary user-submit"
                        />
                    </form>
                }
                <div className="table-users-container">
                    <table className="table_users">
                        <thead>
                            <tr>
                                <th>Nombre de Usuario</th>
                                <th>rol</th>
                                <th>contraseña</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(element => <UsersMap {...element} key={element.uid} setUsers={setUsers} users={users} />)
                            }
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    )
}
