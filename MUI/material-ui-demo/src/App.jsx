import './App.css'
import Button from '@mui/material/Button';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Button color='success' variant="contained" onClick={()=>{alert('Hello')}}>Contained</Button>
      <Counter />
    </div>
  )
}

export default App
