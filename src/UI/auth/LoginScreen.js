import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { loginWhitEmailAndPasswordAsync } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import passwordLogo from '../../pictures/password.svg';
import arrow from '../../pictures/arrow_back.svg';
import presentation from '../../pictures/undraw_eating_together_re_ux62.svg';
import userLogo from '../../pictures/user.svg';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [values, handleInputChange] = useForm({
        user:'',
        password:'',
    });
    const {user, password} = values;
    
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginWhitEmailAndPasswordAsync(user, password));

    }
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <section className="home_screen">
            <article className="arrow_container">
                <img 
                src={arrow} 
                alt="arrow" 
                className="arrow_return"
                onClick={handleBack}
                />
            </article>
            <article>
                <img className="presentation" src={presentation} alt="presentation" />
                <h1>RESTAURANTE: DEL MUNDO A TU MESA</h1>
            </article>
            <article>
                <form
                    onSubmit={onSubmit}
                >
                    <article>
                        <img src={userLogo} alt="userImage" />
                        <input 
                        type="text" 
                        placeholder="Nombre de Usuario" 
                        name="user"
                        value={user}
                        onChange={handleInputChange}
                        />                        
                    </article>
                    <article>
                        <img src={passwordLogo} alt="passwordImage" />
                        <input 
                        type="password" 
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        />
                    </article>
                    <input type="submit" value="Ingresar" />
                </form>
            </article>
        </section>
    )
}
