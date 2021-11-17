import React from 'react'
import { Link } from 'react-router-dom'

export const ElementList = ({ id, description, img }) => {
    return (
        <div className="target_food">
            <div className="target_food_img">
                <img src={img} alt={id} />
            </div>
            <div className="target_food_description">
                <p>{description}</p>
            </div>
            <Link to={`/public/menu/${id}`}>Ver mas</Link>
        </div>
    )
}
