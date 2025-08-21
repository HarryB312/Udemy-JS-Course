function handleFormSubmit(e){
    console.log('Form submitted')
    e.preventDefault();
}

export default function Form(){
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <button>Submit</button>
            </form>
        </div>
    )
}