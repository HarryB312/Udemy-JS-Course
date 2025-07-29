import express from 'express'
const app = express()

// app.use((req, res)=>{
//     console.log('We got a new request')
//     res.send('Hello, we got your request!')
// })

app.get('/', (req, res)=>{
    res.send('This is the home page')
})

//Path parameter
app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit.`)
})
//

app.get('/cats',(req, res)=>{
    res.send('meow')
})

app.post('/cats',(req, res)=>{
    res.send('post request to cats')
})

app.get('/dogs', (req, res)=>{
    res.send('woof')
})

app.get('/search', (req, res)=>{
    const {q} = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get(/(.*)/, (req, res)=>{
    res.send('no info for this page')
})

app.listen(3000, () =>{
    console.log('Listening on port 3000')
})