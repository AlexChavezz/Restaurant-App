import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateElement } from '../../actions/actionElements';
import { useForm } from '../../hooks/useForm';

export const MenuList = (props) => {
    const dispatch = useDispatch();
    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ values, handleInputChange, reset ] = useForm({
        name: props.name,
        price: props.price,
        select: props.isAvailable,
    });
    let { name, price, select } = values;
    const handleDisabledTrue = () => {
        setIsDisabled(false);
    }
    const handleCancel = () => {
        setIsDisabled(true);
        reset();
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        const newElement = {
            ...props,
            name,
            price,
            isAvailable: parseInt(select),
        }
        dispatch(updateElement(newElement));
        try {
            await fetch(`https://restaurant-bac.herokuapp.com/api/menu/${props.idMenu}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newElement)
            });
        } catch (error) {
            console.log(error);
        }
        setIsDisabled(true);
    }
    return (
        <div>
            <p>{props.name}</p>
            <form>
                <label>
                    Nombre:
                </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    disabled={isDisabled}
                />
                <label>
                    Precio:
                </label>
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={handleInputChange}
                    disabled={isDisabled}
                />
                <label>
                    Disponibilidad:
                </label>
                <select
                    name="select"
                    onChange={handleInputChange}
                    disabled={isDisabled}
                    value={select}
                >
                    <option
                        value={1}
                    >
                        Disponible
                    </option>
                    <option
                        value={0}
                    >
                        No Disponible
                    </option>
                </select>
                <div className="buttons">
                    {
                        isDisabled &&
                        <button
                            onClick={handleDisabledTrue}
                            type="button"
                            className="edit"
                        >
                            EDITAR
                        </button>
                    }
                    {
                        !isDisabled &&
                        <>
                            <button
                                onClick={handleUpdate}
                                type="submit"
                                className="update"
                            >
                                ACTUALIZAR
                            </button>
                            <button
                                onClick={handleCancel}
                                type="button"
                                className="cancel"
                            >
                                CANCELAR
                            </button>
                        </>
                    }
                </div>
            </form>
        </div >
    );
}
