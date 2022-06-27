import React from 'react'
import Ingredient from './Ingredient'
import './FeedIngredient.css'

//props: list : [Ingredient]
export default function FeedIngredient(props) {
  return (
    <div className='feed-ingredient'>
        <div className='ingredient-list'>
            {props.list.map( (ingredient) => (
                <Ingredient name={ingredient.name} category={ingredient.category} amount={ingredient.amount} price={ingredient.price} type={ingredient.type} />
            ))}
        </div>
    	<div className='add-ingredient'>
			<button>Add Ingredient</button>
    	</div>
    </div>
  )
}
