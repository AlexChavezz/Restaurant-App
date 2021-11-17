import React from 'react'
import { useNavigate } from 'react-router-dom';
import arrow from '../../pictures/arrow_back.svg';
import { ElementList } from './ElementList';
// import {ElementList} from './ElementList';

  

export const MenuScreen = () => {
  const elements = [
    {
      id: 'tacos',
      img: 'https://imgr.search.brave.com/lQu1cCmoK9E5k-t-pJ8rhWR3ZwpoiGRzlo23-WpXP88/fit/1200/1200/ce/1/aHR0cHM6Ly9yZW1l/emNsYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDYv/dGFjb3MuanBn',
      description:'TACOS PROVENIENTES DE MEXICO'
    },
    {
      id:'pizza',
      img:'https://imgr.search.brave.com/YyrMKdOW7OLTlJt-i_7pMfdz8azI9kijPuOaoM25jP0/fit/1200/1200/ce/1/aHR0cHM6Ly9kYXNo/b2ZnaW5nZXJibG9n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wMS9CcnVu/Y2gtMDc4NDIuanBn',
      description:'PIZZA PROVENIENTES DE ITALIA'
    }
  ]
    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
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
                {
                  elements.map(element => <ElementList {...element}/>)
                }
            </article>
        </section>
    )
}
