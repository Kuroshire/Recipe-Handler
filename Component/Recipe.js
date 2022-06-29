import React from 'react'
import './Recipe.css'

//props : name, price, ingredients: [{ingredient, amount}]
//price is set at creation of the recipe

export default function Recipe(props) {

    return (
        <div className='recipe'>
        
            <div className="recipe-infos">
                    <div className="recipe-name">
                        {props.name}
                    </div>
                    <div className="recipe-nb-ingredients">
                        {props.ingredients.length} ingredients
                    </div>
            </div>

            <div className="recipe-price">
                {props.price} €
            </div>
        </div>
  )
}