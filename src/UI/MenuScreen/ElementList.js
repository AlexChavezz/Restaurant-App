import React from 'react'
import { Link } from 'react-router-dom'

export const ElementList = ({name, price, photo, isAvailable}) => {
    return (
        <div className={isAvailable === 1?"target_food":"target_food disabled"}>
            <div className="target_food_img">
                <img src={photo} alt={name} />
            </div>
            <div className="target_food_name">
                <h3>{name}</h3>
            </div>
            <span>$ {price}</span>
            <div className="target_food_shop">
                <Link to={isAvailable === 1? `/public/menu/${name}` : '/public/Menu'}>
                    <button className="btn btn-primary" disabled={isAvailable !== 1}>
                        VER MÁS
                    </button>
                </Link>
            </div>
        </div>
    )
}
