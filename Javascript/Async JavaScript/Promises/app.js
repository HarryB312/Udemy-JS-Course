//A promise is an onject representing the eventual completion or failure of an asynchronous operaion//


// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}









// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })







// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(()=>{
//         console.log('It worked!(page1)')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(()=>{
//                 console.log('It worked!(page2)')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(()=>{
//                         console.log('It worked!(page3)')
//                     })
//                     .catch(()=>{
//                         console.log('error!(page3)')
//                     })
//         })
//         .catch(()=>{
//             console.log('error!(page2)')
//         })
//     })
//     .catch(()=>{
//         console.log('error!(page1)')
//     });


// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data)=>{
//         console.log('It worked (Page1)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data)=>{
//         console.log('It worked (Page2)')
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data)=>{
//         console.log('It worked (Page3)')
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log('Error!')
//         console.log(err)
//     })




//Creating promises//
//Takes to properties(Typically resolve and reject)
// new Promise ((resolve, reject)=>{

//     })

const fakeRequest = (url)=>{
    return new Promise ((resolve, reject)=>{
        const rand = Math.random()
        setTimeout(() => {
            if(rand < 0.7){
                resolve('your fake data here')
            }
            reject('request error')
        }, 1000);
    })
}

fakeRequest('/dogs/1')
.then((data)=>{
    console.log('Done with request')
    console.log('data is:', data)
})
.catch((err)=>{
    console.log('Oh No', err)
})



