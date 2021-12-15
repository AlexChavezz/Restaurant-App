import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { cleanElementToBuy } from '../../actions/buyActions';
import { resetTableNumber } from '../../actions/tableNumber';
import arrow from '../../pictures/arrow_back.svg';
import foodImgUrl from '../../pictures/undraw_breakfast_psiw.svg';


export const BuyScreen = () => {
    const navigate = useNavigate();
    const element = useSelector(state => state.buy)
    const dispatch = useDispatch();
    const handleBack = () => {
        navigate(-1);
        dispatch(cleanElementToBuy());
    }
    const tableNumber = useSelector(state => state.tableNumber);
    const handleBuy = () => {
        dispatch(resetTableNumber());
        Swal.fire({
            imageUrl: foodImgUrl,
            title:'GRACIAS POR SU COMPRA',
            text:`Tu compra estara en la mesa ${tableNumber} en unos minutos`
        });
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
                <Link 
                to="/public"
                className="btn btn-primary btn-buy"
                onClick={handleBuy}
                >
                    Confirmar ${element.price}
                </Link>
            </article>
        </section>
    )
}
