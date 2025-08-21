

export default function Clicker({buttonText, message}){
    return(
        <div>
            <button onClick={()=> alert(message)}>{buttonText}</button>
        </div>
    )
}


// function handleClick(){
//     console.log("Clicked")
// }

// export default function Clicker(){
//     return(
//         <div>
//             <h1>Click the button</h1>
//             <button onClick={handleClick}>Click Here</button>
//         </div>
//     )
// }