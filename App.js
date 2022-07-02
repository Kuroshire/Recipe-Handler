import { FeedIngredient, FeedRecipe, Description, Header } from "./Component";
import './App.css';
import { useEffect, useState } from "react";

function App() {

	//region FUNCTION ---------------------------------------------------------------------------------------------
	const addIngredient = (name, category, amount, price,type) => {

		//not tested yet.

		let inList = false
		const newList = listIngredient.map((item) => {
			if (item.name === name) {
				//case ingredient already in list
				inList = true
			  	const updatedItem = {
					...item,
					amount: item.amount + amount,
			};
	  
			  return updatedItem;
			}
	  
			return item;
		});

		if(!inList) {
			
			let newIngredient = 
			{
				"name": name,
				"category": category,
				"amount": amount,
				"price": price,
				"type": type
			}

			newList.push(newIngredient)
		}

		setListIngredient(newList);


/*
not working :
		//let newList = listIngredient
		let ingredientIndex = listIngredient.findIndex(element => element.name === name)

		if(ingredientIndex !== -1) {
			//PUT request to change amount
			listIngredient[ingredientIndex].amount += amount
			//setListIngredient(newList)
			//return `${name} already in the list of ingredient. You have ${listIngredient[ingredientIndex].amount} ${name}s left.`
		} else{

			

			let newIngredient = 
			{
				"name": name,
				"category": category,
				"amount": amount,
				"price": price,
				"type": type
			} 

			listIngredient.push(newIngredient)
			//setListIngredient(newList)
		}*/
	}



	//listIngredients : [{ ingredient: name, amount: int }]
	const addRecipe = (name, listIngredients) => {
		let newRecipe = {
			"name": name,
			"price": calculateRecipePrice(listIngredients),
			"ingredients": listIngredients 
		}

		return newRecipe
	}

    const calculateRecipePrice = (listIngredients) => {
		//loop over the list
		//get the ingredient price
		//multiple the ingredient price by the amount of it
		//return
		return 10.49
    }


	//endregion ---------------------------------------------------------------------------------------------------


	//region MOCK API ---------------------------------------------------------------------------------------------

	//on recup une liste d'objets a travers un appel a l'API pour recup les elements présents dans le frigo
	const ingredientAPI = [
		{
			"name": "Tomate",
			"category": "Legume",
			"amount": 3,
			"price": 1.80,
			"type": "kg"
		},{
			"name": "Courgette",
			"category": "Legume",
			"amount": 3,
			"price": 1.80,
			"type": "kg"
		},{
			"name": "Poivron",
			"category": "Legume",
			"amount": 3,
			"price": 1.80,
			"type": "kg"
		},{
			"name": "Concombre",
			"category": "Legume",
			"amount": 3,
			"price": 2,
			"type": "kg"
		},
	]

	const recipeAPI = [
		{
			"name": "Salade de Tomates",
			"price": calculateRecipePrice([]), 
			"ingredients": [
				{
					"ingredient": "Tomate", 
					"amount": 2
				},
				{
					"ingredient": "Concombre",
					"amount": 1
				}
			]
		},
		{
			"name": "Pates Carbonara",
			"price": calculateRecipePrice([]), 
			"ingredients": [
				{
					"ingredient": "Pates", 
					"amount": 1
				},
				{
					"ingredient": "Creme",
					"amount": 1
				},
				{
					"ingredient": "Lardons",
					"amount": 1
				}
			]
		},
		{
			"name": "Salade de Concombre",
			"price": calculateRecipePrice([]), 
			"ingredients": [
				{
					"ingredient": "Concombre", 
					"amount": 2
				},
				{
					"ingredient": "Tomate",
					"amount": 1
				}
			]
		}
	]

	const [listIngredient, setListIngredient] = useState(ingredientAPI)
	const [listRecipe, setListRecipe] = useState(recipeAPI)
	const [selectedElement, setSelectedElement] = useState({})

	useEffect( ()=> {
		setListIngredient(listIngredient)
	}, [listIngredient, addIngredient]) 

	useEffect( () => {
		setListRecipe(listRecipe)
	}, [listRecipe, addRecipe])
	
	useEffect( () => {
		setSelectedElement(selectedElement)
	}, [selectedElement])

	//endregion ---------------------------------------------------------------------------------------------------

	//region HTML DISPLAY -----------------------------------------------------------------------------------------

  	return (
    	<div className="App">
			<Header />

			<div className="main-page">
				<div className="Ingredients">
					<FeedIngredient list={listIngredient} addIngredient={addIngredient} />
				</div>
				<div className="description">
					<Description selectedElement={selectedElement} />
				</div>
				<div className="Recipes">
					<FeedRecipe list={listRecipe} addRecipe={addRecipe} />
				</div>
			</div>
    	</div>
  	);
	
	//end region --------------------------------------------------------------------------------------------------
}

//<Ingredient name='Tomate' category='Legume' amount='3' price='1.80' type='kg' />
export default App;
