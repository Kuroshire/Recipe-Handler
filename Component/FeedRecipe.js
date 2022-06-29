import React from 'react'
import Recipe from './Recipe'
import './FeedRecipe.css'

//props: list : [Recipe]
export default function FeedRecipe(props) {
  return (
    <div className='feed-recipe'>
        <div className='recipe-list'>
            {props.list.map( (recipe) => (
                <Recipe name={recipe.name} price={recipe.price} ingredients={recipe.ingredients} />
            ))}
        </div>
    	<div className='add-recipe'>
			<button>Add Recipe</button>
    	</div>
    </div>
  )
}