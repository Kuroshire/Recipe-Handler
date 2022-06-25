import { FeedIngredient } from "./Component";
import './App.css';

function App() {

	const list = [
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
			<FeedIngredient list={list} />
    	</div>
  );
}

//<Ingredient name='Tomate' category='Legume' amount='3' price='1.80' type='kg' />
export default App;
