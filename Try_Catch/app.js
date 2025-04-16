                            //TRY CATCH//
                       //Cathes errors you think may occur and print an output//
try {
    hello.toUppercase();
}catch {
    console.log('ERRROOR')
}

function yell(msg){
    try{
    console.log(msg.toUpperCase().repeat(3));
    }catch (e) {
        console.log(e);
        console.log('Please enter a string next time!')
    }
}