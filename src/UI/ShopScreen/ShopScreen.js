import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import arrow from '../../pictures/arrow_back.svg';
import cart_empty from '../../pictures/empty_cart.svg';
import { ShowElemets } from './ShowElemets';
export const ShopScreen = () => {

    const [ total, setTotal ] = useState(0);
    const navigate = useNavigate();
    const { state } = useSelector(state => state.cart)
    const handleBack = () => {
        navigate(-1);
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
                                        ACTIONS
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
                        <button
                            className="btn btn-primary"
                        >
                            COMPRAR
                        </button>
                    </article>
            }
        </section>
    )
}
