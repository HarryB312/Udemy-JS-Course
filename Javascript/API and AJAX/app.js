                        //AJAX//
//Asynchronous//
//Javascript//
//And//
//XML(Extencible Markup Language. `Not common`)//

//Refers to making request while the page is already loaded.//
//Making request behind the scenes//


                        //API's//
//Application Programming Interface: Comupting Interface which defines interactions between software intermediaries//
//Web API's: application programming interface for either a web server or a web browser.(Occurs over HTTP:)//



                        //JSON//
//Java
//Script
//Oject
//Notation

//Format for sharing information//

// Use JSON.parse() to convert json info to be read in javascript//
//JSON.parse()

// Use JSON.stringify() to convert javascript into readable JSON//
//JSON.stringify()


                        //HTTP Verbs//
//GET- Get data from somewhere
//Post- Send data somewhere
//Delete- remove data. 


                        //HTTP Status Codes//
//SUCCESSFUL REPONSES(200's)// 
//200- Request succeeded//

//CLIENT ERROR RESPONSES(400's)//
//400- Bad request//
//401- Unauthorized//
//404- Not found//

//SERVER ERROR RESPONSES(500's)//
//500- Internal server error//
//501- Not Implemented//
//502- Bad Gateway//



                        //Fetch API//
//Newer way of making a request//
//Returns a Promise//

fetch("https://www.swapi.tech/api/people/1/")
.then((res) =>{
    console.log('Resolved!', res);
    return res.json();
})
.then((data) =>{
    console.log(data.result.properties);
    return fetch("https://www.swapi.tech/api/people/2/")
})
.then((res)=>{
    console.log('Second Resquest Resolved!')
    return res.json()
})
.then((data) =>{
    console.log(data.result.properties);
})
.catch((e) =>{
    console.log('Rejected!', e);
});


//Async Version//
const starWarChara = async ()=>{
    try{
        const res = await fetch("https://www.swapi.tech/api/people/1/")
        const data = await res.json();
        console.log(data.result.properties)
    }catch(e){
        console.log('Error', e)
    }
}

starWarChara();





