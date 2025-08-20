import RandomPokemon from './RandomPokemon'
import Greeter from './Greeter';
import Die from './Die';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import './App.css'

const data = [
  {id: 1, item: 'Eggs', quantity: 12, completed: false},
  {id: 2, item: 'Chichen', quantity: 6, completed: true},
  {id: 3, item: 'Steak', quantity: 3, completed: false},
  {id: 4, item: 'Carrots', quantity: 40, completed: true},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];


function App() {
  return (
    <div>
      <PropertyList properties={properties}
        />
      <ShoppingList items={data}/>
      {/* <RandomPokemon />
      <Greeter person="Harrison" from='Brittany'/> 
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/> 
      <Slots val1='👻' val2='👻' val3='👻'/> */}
      
    </div>
  
  )
}

export default App;
