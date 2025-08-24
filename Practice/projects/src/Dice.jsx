import Die from "./Die"


function Dice({dice}){
    return(
        <div>
            {dice.map((v, i) =>(
                <Die key={i} val={v}/>
            ))}
        </div>
    )
}

export default Dice