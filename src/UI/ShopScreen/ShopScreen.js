import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import arrow from '../../pictures/arrow_back.svg';
import { ShowElemets } from './ShowElemets';
import foodImgUrl from '../../pictures/undraw_breakfast_psiw.svg';
import { resetTableNumber } from '../../actions/tableNumber';
import { Link } from 'react-router-dom';
import { removeAllElements } from '../../actions/cartActions';
import cart_empty from '../../pictures/empty_cart.svg';

export const ShopScreen = () => {

    const dispatch = useDispatch();
    const [ total, setTotal ] = useState(0);
    const navigate = useNavigate();
    const { state } = useSelector(state => state.cart)
    const handleBack = () => {
        navigate(-1);
    }
    const tableNumber = useSelector(state => state.tableNumber);
    const handleShoop = () => {
        Swal.fire({
            imageUrl: foodImgUrl,
            title:'GRACIAS',
            text:`Tu compra estara en la mesa ${tableNumber} en unos minutos`
        });
        dispatch(resetTableNumber());
        dispatch(removeAllElements());
    }
    
    return (
        <section className="shopping_screen">
            <article
                onClick={handleBack}
                className="arrow_container"
            >
                <img
                    src={arrow}
                    alt="arrow"
                    className="arrow_return"
                />
            </article>
            {
                state.length === 0 ?
                    <article className="shop_screen_content row">
                        <img src={cart_empty} alt="cart_empty" className="cart_empty" />
                        <p>Parece que tu carrito está vacío</p>
                    </article>
                    :
                    <article className="shop_screen_content column">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        PRODUCTO
                                    </th>
                                    <th>
                                        COSTO
                                    </th>
                                    <th>
                                        OPCIONES
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map(element => <ShowElemets {...element} key={element.id} setTotal={setTotal} />)
                                }
                            </tbody>
                        </table>
                        <article>
                            <span>TOTAL: $ {total}</span>
                        </article>
                        <Link
                        to="/public"
                            className="btn btn-primary"
                            onClick={handleShoop}
                        >
                            ORDENAR
                        </Link>
                    </article>
            }
        </section>
    )
}
