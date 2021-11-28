import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';

export const UsersMap = (props) => {
    const {role, userName} = useSelector(state => state.auth);
    const handleDeleteUser = () => {
        if( props.userName === userName && props.role === role ){
            Swal.fire({
                icon:'error',
                text:'No puedes eliminar este usuario'
            });
        }else{
            fetch(`http://localhost:8080/api/users/delete/${props.uid}`, {
                method: 'DELETE'
            })
            .then((response) => response.json())
            .then(({message}) => {
                Swal.fire({
                    icon:'success',
                    text: message && 'Usuario eliminado correctamente'
                });
            })    
        }
    }
    return (
        <tr>
            <td>{props.userName}</td>
            <td>{props.password}</td>
            <td>{props.role}</td>
            <td>
                <button
                className="btn btn-danger"
                onClick={handleDeleteUser}
                >
                    Eliminar Usuario
                </button>
            </td>
        </tr>
    )
}
