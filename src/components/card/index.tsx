import React from 'react'

interface CardProps {
  image: string
  title: string
  subtitle: string
  price: string
}

export const Card: React.FC<CardProps> = ({ image, title, subtitle, price }) => {
  return (
    <div className="card rounded-0" style={{ width: '18rem' }}>
      <img
        src={image}
        className="card-img-top"
        style={{ height: '18rem' }}
        alt="post image"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ textTransform: 'uppercase' }}>{title}</h5>
        <p className="card-text">
          {subtitle}
        </p>
        <div className = "d-flex justify-content-between mt-auto">
         <p className="card-text mb-0">{price}</p>
         </div>
      </div>
    </div>
  )
}
