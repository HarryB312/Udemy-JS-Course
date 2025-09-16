import './App.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Counter from './Counter';
import TodoList from './TodoList';

function App() {
  return (
    <div>
      <CssBaseline />
      {/* <Button color='success' variant="contained" onClick={()=>{alert('Hello')}}>Contained</Button> */}
      {/* <Counter /> */}
      <TodoList />
    </div>
  )
}

export default App;
