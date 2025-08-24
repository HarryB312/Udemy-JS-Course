import Counter from "./Counter"
import ToDoList from "./ToDoList"
import LuckN from "./LuckyN";
import Die from "./Die";


function App() {
  return(
    <div>
      <LuckN />
      <LuckN numDice={3} goal={10}/>
      {/* <Die val={2}/>
      <Die val={3}/> */}
      {/* <ToDoList />
      <Counter /> */}
    </div>
  )
}

export default App;
