import React from 'react'

interface CardProps {
  image: string
  title: string
  text: string
  price: string
  rating: string

}

export const Card: React.FC<CardProps> = ({ image, title, text, price, rating }) => {
  return (
    <div className="card rounded-0" style={{ width: '18rem' }}>
      <img
        src={image}
        className="card-img-top"
        style={{ height: '18rem' }}
        alt="post image"
      />
      <div className="card-body d-flex flex-column" style={{ height: '9rem' }}>
        <h5 className="card-title" style={{ textTransform: 'uppercase' }}>{title}</h5>
        <p className="card-text" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {text}
        </p>
        <div className = "d-flex justify-content-between">
         <p className="card-text mb-0">{price}</p>
         <p className="card-text mb-0">{rating}</p>
         </div>
      </div>
    </div>
  )
}
