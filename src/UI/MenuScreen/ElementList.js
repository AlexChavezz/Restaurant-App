import React from 'react'
import { Link } from 'react-router-dom'

export const ElementList = ({ title, description, photo, price }) => {
    return (
        <div className="target_food">
            <div className="target_food_img">
                <img src={photo} alt={title} />
            </div>
            <div className="target_food_name">
                <h3>{title}</h3>
            </div>
            <span>$ {price}</span>
            <div className="target_food_shop">
                <Link to={`/public/menu/${title}`}>
                    <button className="btn btn-primary">
                        VER MÁS
                    </button>
                </Link>
            </div>
        </div>
    )
}
