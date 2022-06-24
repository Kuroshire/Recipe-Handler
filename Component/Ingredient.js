import React, { useState } from 'react'
import './Ingredient.css'

//props : name, category, amount, price, type: [kg, unit]

export default function Ingredient(props) {

    const [amount, setAmount] = useState(Number(props.amount));

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
                <button className="button-up-amount" onClick={() => setAmount(amount+1)}>
                    +
                </button>
                <div className="amount">
                    {amount}
                </div>
                <button className="button-down-amount" onClick={() => setAmount(amount-1)}>
                    -
                </button>
            </div>
        
        </div>
    )
}


