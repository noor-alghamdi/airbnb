import React from 'react'
import '../Cards/Card.css'

function Card({ src, title, description, price }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card--details">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}
export default Card
