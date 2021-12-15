import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ElementList } from './ElementList';
import arrow from '../../pictures/arrow_back.svg';
import cart_shopping from '../../pictures/shopping_cart.svg';
import { getRandomNumber } from '../../helpers/getRandomNumber';
import Swal from 'sweetalert2';
import { setTableNumberAction } from '../../actions/tableNumber';

export const MenuScreen = () => {
  const dispatch = useDispatch();
  const { state } = useSelector(state => state.elements);
  const cart = useSelector(state => state.cart);
  const tableNumber = useSelector(state => state.tableNumber);
  console.log(tableNumber)
  useEffect(() => {
    if (!tableNumber) {
      const number = getRandomNumber();
      dispatch(setTableNumberAction(number));
      Swal.fire({
        title: 'BIENVENIDO',
        text: 'Tu numero de mesa es: ' + number
      });
    }

  }, [dispatch,tableNumber])

  if (!state) {
    return (
      <div></div>
    )
  }
  return (
    <section className="menu_screen">
      <Link to="/public">
        <article className="arrow_container">
          <img
            src={arrow}
            alt="arrow"
            className="arrow_return"
          />
        </article>
      </Link>
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
      <article>
        <h1>Menu De Hoy </h1>
        <span>{new Date().getDate()} / {new Date().getMonth() + 1} / {new Date().getFullYear()}</span>
      </article>
      <article className="container_food">
        {
          state.map(element => <ElementList {...element} key={element.idMenu} />)
        }
      </article>
    </section>
  )
}
