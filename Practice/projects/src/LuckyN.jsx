import {getRolls} from './utils'
import { sum } from './utils'
import { use, useState } from "react"
import Dice from './Dice'

function LuckN({numDice=2, goal=7}){
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = sum(dice) === goal
    const roll = ()=>setDice(getRolls(numDice))
    return(
        <div>
            <h1>Lucky{goal} {isWinner && 'You Win!'}</h1>
            <Dice dice={dice}/>
            <button onClick={roll}>Reroll Dice</button>
        </div>
    )
}

      <LuckN />
      export default LuckN