import React from 'react'

//props : name, category, amount, price, type: [kg, unit]

export default function Ingredient(props) {
  return (
    <div className='ingredient'>
      
        <div className="ingredient-infos">
                <div className="name">
                    {props.name}
                </div>
                <div className="category">
                    {props.category}
                </div>
        </div>

        <div className="ingredient-price">
            {props.price} €/{props.type}
        </div>

        <div className="ingredient-amount">
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


