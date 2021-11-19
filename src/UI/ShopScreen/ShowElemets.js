import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeElement } from '../../actions/cartActions';

export const ShowElemets = ({title, price, id, setTotal}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeElement(id));
        setTotal(a => a - price)
    }
    useEffect(() => {
        setTotal(a => a + price)
    }, [setTotal, price])


    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                $ {price}
            </td>
            <td>
                <button
                className="btn btn-danger"
                onClick={handleDelete}
                >Eliminar</button>
            </td>
        </tr>
    )
}
