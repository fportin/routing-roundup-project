let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.all('*', (req, res) => {
    console.log(req.method);
    const method = req.method;
    const path = req.path;
    const randNum = 1;
    res.render('index', { method, path, randNum} )
    // res.send('test')
})

let port = 8081;

app.listen(port, () => console.log('Listening on Port 8081...'))

app.set('view engine', 'pug');