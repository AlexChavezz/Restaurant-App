import { types } from "../types/types";
import Swal from 'sweetalert2'
export const loginWhitEmailAndPasswordAsync = (userName, password) => {
    return (dispatch) => {
        try {
            fetch('https://restaurant-bac.herokuapp.com/api/users/get', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userName, password})
            })
                .then((response) => response.json())
                .then(({userName, role}) => {
                    if(!userName || !role){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Credenciales no registradas',
                          })
                    }else{
                        dispatch(loginWhitEmailAndPassword( userName,role ));
                    }
                });
        } catch (error) {

        }
    }
}

const loginWhitEmailAndPassword = (userName, role) => ({
    type:types.login,
    payload: {
        userName,
        role,
    }
});

export const logout = () => ({
    type:types.logout,
});