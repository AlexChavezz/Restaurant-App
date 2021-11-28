import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { cleanElementToBuy } from '../../actions/buyActions';
import arrow from '../../pictures/arrow_back.svg';

export const BuyScreen = () => {
    const navigate = useNavigate();
    const element = useSelector(state => state.buy)
    const dispatch = useDispatch();
    const handleBack = () => {
        navigate(-1);
        dispatch(cleanElementToBuy());
    }
    if(element === null){
    return (
        <Navigate to="/public/menu" />
    )
    }
    return (
        <section className="shopping_screen">
            <article
                className="arrow_container"
                onClick={handleBack}
            >
                <img
                    src={arrow}
                    alt="arrow"
                    className="arrow_return"
                />
            </article>
            <article className="shop_screen_content column">
                <div className="img_container">
                    <img src={element.photo} alt={element.title} />
                    <p>TOTAL A PAGAR: ${element.price}</p>
                </div>
                <button className="btn btn-primary btn-buy">
                    Confirmar ${element.price}
                </button>
            </article>
        </section>
    )
}
