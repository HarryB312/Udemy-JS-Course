                        //Axios//
//Library for making http requets//

// axios.get('https://swapi.tech/api/people/1')
// .then((res)=>{
//     console.log('Response:', res)
// })
// .catch((e)=>{
//     console.log('Error', e)
// })


//Async Version//       
// const getStarWarsPerson = async()=>{
//     try{
//     const res = await axios.get('https://swapi.tech/api/people/1')
//     console.log(res.data.result.properties)
//     }catch(e){
//         console.log('Error', e)
//     }
// }

// getStarWarsPerson()


                     //TV Show Search//
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const userInput = form.elements.query.value;
    const config = { params: {q: userInput}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`, config)
    addImages(res.data)
    form.elements.query.value = '';
})

const addImages = (shows) =>{
    for(let result of shows){
        const img = document.createElement('IMG')
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}