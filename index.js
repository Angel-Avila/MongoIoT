let express = require('express')
let apiRoutes = require("./api-routes")

let app = express();
app.use('/api', apiRoutes)

var port = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World with Nodemon!'));

app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});