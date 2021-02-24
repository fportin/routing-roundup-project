let express = require('express');
let app = express();
const router = require('./router')
app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.get(/\w*xyz$/, (req, res) => {          // if url has to end w/xyz, then print that's all i wrote
    res.send("That's all I wrote.")
});

app.get('/capital-letters/:id', (req, res) => { 
    //res.send("That's all I wrote.")
    // console.log(req.params)
    let word = (req.params.id).toUpperCase()
    res.send(word)
});

//THESE 2 do the same thing.

//app.use("/margot", router) //every time the path starts with /margot we go to the routher
app.use(/\/(margot|margeaux)/, router)

app.get('/margot/contact', (req, res) => {  //phase 5 why does the pipe break it
    //res.send("That's all I wrote.")
    res.send("Contact")
});
// app.get('/about/foo', (req, res) => {  // ends with $ SLASH /w
//     throw new Error
// })

app.all(/^\/(\w|-)*\/?$/, (req, res) => {  
    // try {
        //console.log(req.method);
        const method = req.method;
        const path = req.path;
        const randNum = Math.floor(Math.random() * 10)
        res.render('index', { method, path, randNum} )
    // } catch (error)  {
    //     console.error(error)
    // }
    // res.send('test')
})



let port = 8081;

app.listen(port, () => console.log('Listening on Port 8081...'))

app.set('view engine', 'pug');
