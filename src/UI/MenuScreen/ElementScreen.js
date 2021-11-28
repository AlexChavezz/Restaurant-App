import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getElementById } from '../../helpers/getElementById';
import arrow from '../../pictures/arrow_back.svg';
import cart_shopping from '../../pictures/shopping_cart.svg';
import { Link } from 'react-router-dom';
import { pushElement } from '../../actions/cartActions';
import uniqid from 'uniqid';
import { elementToBuy } from '../../actions/buyActions';

export const ElementScreen = () => {

  const { state: elements } = useSelector(state => state.elements);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const elementTofind = params.elementId;
  const element = getElementById(elementTofind, elements);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handleBuy = () => {
    dispatch(elementToBuy(element));
  }

  const handleAddElementToCart = () => {
    dispatch(pushElement({
      id: uniqid(),
      ...element
    }));
  }
  return (
    <section className="container_element">
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
      <Link to="/public/shopping/cart">
        <article className="cart_container">
          <div>
            {
              cart.state.length > 0 &&
              <div>
                {cart.state.length}
              </div>}
            <img
              src={cart_shopping}
              alt="cart_shoppgin"
              className="cart_shopping"
            />
          </div>
        </article>
      </Link>
      <article className="info_element">
        <article className="img_element">
          {<img src={element.photo} alt={element.name} />}
        </article>
        <article className="description_element">
          <h3><b>Nombre:</b> {element.name}</h3>
          <p><b>Descripción</b>: {element.description}</p>
          <div className="from">
            <p>
              <b>NACIONALIDAD:
              </b>
              {element.country}
            </p>
            <img src={element.flagge} alt={element.country} />
          </div>
          <div className="buttons_container">
            <Link to="/public/shopping/buy">
              <button
                className="btn btn-primary"
                onClick={handleBuy}
              >
                Ordenar  ${element.price}
              </button>
            </Link>
            <button
              className="btn btn-primary"
              onClick={handleAddElementToCart}
            >
              Añadir al carrito + ${element.price}
            </button>
          </div>
        </article>

      </article>
    </section>
  )
}
