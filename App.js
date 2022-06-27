import { FeedIngredient, Header } from "./Component";
import './App.css';

function App() {

	//on recup une liste d'objets a travers un appel a l'API pour recup les elements présents dans le frigo
	const listIngredient = [
		{
			"name": "Tomate",
			"category": "Legume",
			"amount": "3",
			"price": "1.80",
			"type": "kg"
		},{
			"name": "Tomate",
			"category": "Legume",
			"amount": "3",
			"price": "1.80",
			"type": "kg"
		},{
			"name": "Tomate",
			"category": "Legume",
			"amount": "3",
			"price": "1.80",
			"type": "kg"
		},{
			"name": "Tomate",
			"category": "Legume",
			"amount": "3",
			"price": "1.80",
			"type": "kg"
		},
	]

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
					Recettes
				</div>
			</div>
    	</div>
  );
}

//<Ingredient name='Tomate' category='Legume' amount='3' price='1.80' type='kg' />
export default App;
