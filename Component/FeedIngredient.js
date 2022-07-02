import React, { useState } from 'react'
import Ingredient from './Ingredient'
import './FeedIngredient.css'

//props: list : [Ingredient]
export default function FeedIngredient(props) {

	const [listIngredient, setListIngredient] = useState(props.list)

/*
	const addIngredient = (name, category, amount, price, type) => {
		
		//verifications

		let newList = listIngredient
		let ingredientIndex = newList.findIndex(element => element.name === name)

		if(ingredientIndex !== -1) {
			//PUT request to change amount
			newList[ingredientIndex].amount += amount
			console.log(`${name} already in the list of ingredient.\nYou have ${newList[ingredientIndex].amount} ${name}s left.`)
			return newList

		}

		let newIngredient = 
		{
			"name": name,
			"category": category,
			"amount": amount,
			"price": price,
			"type": type
		}

		newList.push(newIngredient)

		console.log(`Added ${amount} ${name}${amount > 1 ? 's' : ''} to the list.`)
		return newList


	}
*/

	return (
		<div className='feed-ingredient'>
			<h1 className='ingredient-title'> Ingredients </h1>
			<div className='ingredient-list'>
				{props.list.map( (ingredient) => (
					<Ingredient name={ingredient.name} category={ingredient.category} amount={ingredient.amount} price={ingredient.price} type={ingredient.type} />
				))}
			</div>
			<div className='add-ingredient-btn'>
				<button onClick={() => props.addIngredient("Pomme", "Fruit", 1, 0.75, "kg")}> Add Ingredient </button>
			</div> 
		</div>
  )
}

/* <div className='add-ingredient'>
				<button onClick={() => setListIngredient(addIngredient("Pomme", "Fruit", 1, 0.75, "kg"))}> Add Ingredient </button>
			</div> 
*/