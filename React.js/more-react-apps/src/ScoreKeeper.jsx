//UPDATE STATE OF OBJS//

import { useState } from "react"
export default function ScoreKeeper(){
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
    function increasep1Score(){
        const newScores = {...scores, p1Score: scores.p1Score + 1}
        setScores((oldscores) =>{
            return {...oldscores, p1Score: oldscores.p1Score + 1}
        })
    }
    function increasep2Score(){
        const newScores = {...scores, p2Score: scores.p2Score + 1}
        setScores((oldscores) =>{
            return {...oldscores, p2Score: oldscores.p2Score + 1}
        })
    }
    return(
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increasep1Score}>+1 Player 1</button>
            <button onClick={increasep2Score}>+1 Player 2</button>
        </div>
    )
}