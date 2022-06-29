import React, { useState } from 'react'
import './Ingredient.css'

//props : name, category, amount, price, type: enum('kg', 'unit')

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
                {Number(props.price).toFixed(2)} €/{props.type}
            </div>

            <div className="ingredient-amount">
                <button className="btn-amount" onClick={() => setAmount(amount+1)}>
                    +
                </button>
                <div className="amount">
                    {amount}
                </div>
                <button className="btn-amount" 
                    onClick={() => (
                        setAmount(Math.max(0, amount-1))
                    )}>
                    -
                </button>
            </div>
        
        </div>
    )
}


