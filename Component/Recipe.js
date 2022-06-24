import React from 'react'

//props : name, category, amount, price, type: [kg, unit]

export default function Recipe(props) {
  return (
    <div className='recipe'>
      
        <div className="recipe-infos">
                <div className="name">
                    {props.name}
                </div>
                <div className="category">
                    {props.category}
                </div>
        </div>

        <div className="recipe-price">
            {props.price} €/{props.type}
        </div>

        <div className="recipe-amount">
            <button className="button-up-amount">
                +
            </button>
            <div className="amount">
                {props.amount}
            </div>
            <button className="button-down-amount">
                -
            </button>
        </div>
      
    </div>
  )
}