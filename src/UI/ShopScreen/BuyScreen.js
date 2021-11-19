import React from 'react';
import { useNavigate } from 'react-router';
import arrow from '../../pictures/arrow_back.svg';

export const BuyScreen = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
      }
    return (
        <div>
            <article className="arrow_container">
                <img
                    src={arrow}
                    alt="arrow"
                    className="arrow_return"
                    onClick={handleBack}
                />
            </article>
            <h1>Buy Screen</h1>
        </div>
    )
}
