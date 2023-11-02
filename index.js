const express = require("express");
const app = express();
const port = 8000; //by default live websites(actual hosted) on 8080
// ----------------------------------------------------------------

// use exporess router
//This below line says that any routes defined in the routes/index will be accessible from the root URL ('/'). So, if you have a route defined in routes/index.js like this:
// router.get('/hello', (req, res) => {
//     res.send('Hello, World!');
// });
// it will display hello world when accessing --> http://localhost:8000/hello
app.use("/", require("./routes/index"));
// ----------------------------------------------------------------------


// setting the view engine
app.set('view engine', 'ejs');
app.set('views', './views');




//--------------------------------------------------------------

// starting server
app.listen(port, (err) => {
  if (err) {
    console.error(`Error: ${err}`);
    console.log("An error occured on our express server");
    return;
  }
  console.log(`Yup!! Server is running Successfully on the server: ${port}`);
});
