import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import visibilityOn from '../../pictures/outline_visibility_black_24dp.png';
import visivilityOff from '../../pictures/outline_visibility_off_black_24dp.png';


export const UsersMap = (props) => {

    const [visivility, setVisivility] = useState(false);
    const { role, userName } = useSelector(state => state.auth);

    const handleDeleteUser = () => {
        if (props.userName === userName && props.role === role) {
            Swal.fire({
                icon: 'error',
                text: 'No puedes eliminar este usuario'
            });
        } else {
            fetch(`https://restaurant-app1.azurewebsites.net/api/users/delete/${props.uid}`, {
                method: 'DELETE'
            })
                .then((response) => response.json())
                .then(({ message }) => {
                    props.setUsers(props.users.filter(user => user.uid !== props.uid));
                    Swal.fire({
                        icon: 'success',
                        text: message && 'Usuario eliminado correctamente'
                    });
                })
        }
    }

    const handleChangeVisivility = () => {
        setVisivility(!visivility);
    }
    return (
        <tr>
            <td>{props.userName}</td>
            <td>
                <div>
                    <input type={visivility? 'text': 'password'} value={props.password} disabled={true} />
                  {  
                  visivility?
                  <img 
                  src={visibilityOn} 
                  alt="visivilityOff" 
                  onClick={handleChangeVisivility}
                  />
                  :
                  <img 
                    src={visivilityOff} 
                    alt="visibilityOn" 
                    onClick={handleChangeVisivility}
                    />}
                </div>
            </td>
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
