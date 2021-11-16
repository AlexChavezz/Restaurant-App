import React from 'react'
import { useHistory } from 'react-router';
import arrow from '../../pictures/arrow_back.svg';
import tacos from '../../pictures/tacos.jpg'


export const MenuScreen = () => {

    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    }
    return (
        <section className="menu_screen">
            <article className="arrow_container">
                <img
                src={arrow}
                alt="arrow"
                className="arrow_return"
                onClick={handleBack}
                />
            </article>
            <article>
                <h1>Menu De Hoy </h1>
                <span>{new Date().getDate()} / {new Date().getMonth() + 1} / {new Date().getFullYear()}</span>
            </article>
            <article className="container_food">
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
              <div className="target_food">
                <div className="target_food_img">
                  <img src={tacos} alt="tacos" />
                </div>
              </div>
            </article>
        </section>
    )
}
