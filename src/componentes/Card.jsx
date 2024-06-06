import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, img, text, link }) {
    return (
        <div className="card">
            <div className='image_container'>
                <img src={img} alt={title} />
            </div>
            <div className='content_container'>
                <h2>{title}</h2>
                <p>{text}</p>
                <Link to={link}>Ver más</Link>
            </div>
        </div>
    );
}

export default Card;