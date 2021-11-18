import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import {useSelector} from 'react-redux'
import { getElementById } from '../../helpers/getElementById';
import arrow from '../../pictures/arrow_back.svg';

export const ElementScreen = () => {
    const {state:elements} = useSelector(state => state.elements);
    const [ isCartActive, setIsCartActive ] = useState(false);
    const params = useParams();
    const elementTofind = params.elementId;
    const element = getElementById(elementTofind, elements);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    const handleBuy = (e) => {
      console.log(e.target.disabled)
      if (e.target.disabled === true){
        console.log('no se puede')
      }
    }
    const handleAddToCart = () => {
      setIsCartActive(true);
    }

    return (
    <section className="container_element">
          <article className="arrow_container">
              <img
                  src={arrow}
                  alt="arrow"
                  className="arrow_return"
                  onClick={handleBack}
              />
          </article>
          <article className="info_element">
              <article className="img_element">
                {<img src={element.photo} alt={element.title} />}
              </article>
              <article className="description_element">
                  <h3><b>Nombre:</b> {element.title}</h3>
                  <p><b>Descripción</b>: {element.description}</p>
                  <div className="from">
                    <p><b>NACIONALIDAD: </b>   {element.country}                   </p>
                    <img src={element.flagge} alt={element.country}/>
                  </div>
                <div className="buttons_container">
                        <button
                          className="btn btn-primary"
                          onClick={handleBuy}
                          disabled={isCartActive}
                          >
                          Comprar  ${element.price}
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={handleAddToCart}
                        >
                          Añadir al carrito + ${element.price}
                      </button>
                  </div>
              </article>

          </article>
      </section>
    )
}
