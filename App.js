import { FeedIngredient, FeedRecipe, Header } from "./Component";
import './App.css';

function App() {

	//region FUNCTION ---------------------------------------------------------------------------------------------
	const addIngredient = () => {
		let newIngredient = 
		{
			"name": "Tomate",
			"category": "Legume",
			"amount": 3,
			"price": 1.80,
			"type": "kg"
		}

		return newIngredient
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
	const listIngredient = [
		{
			"name": "Tomate",
			"category": "Legume",
			"amount": 3,
			"price": 1.80,
			"type": "kg"
		},{
			"name": "Tomate",
			"category": "Legume",
			"amount": 3,
			"price": 1.80,
			"type": "kg"
		},{
			"name": "Tomate",
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

	const listRecipe = [
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

	//endregion ---------------------------------------------------------------------------------------------------

	//region HTML DISPLAY -----------------------------------------------------------------------------------------

  	return (
    	<div className="App">
			<Header />

			<div className="main-page">
				<div className="Ingredients">
					<FeedIngredient list={listIngredient} />
				</div>
				<div className="description">
					description
				</div>
				<div className="Recipes">
					<FeedRecipe list={listRecipe} />
				</div>
			</div>
    	</div>
  	);
	
	//end region --------------------------------------------------------------------------------------------------
}

//<Ingredient name='Tomate' category='Legume' amount='3' price='1.80' type='kg' />
export default App;
