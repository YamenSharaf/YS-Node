//Setting up IO and Express
const fs = require('fs');
const express = require ('express'); const app = express();

//Importing JSON data
var portfolio = JSON.parse(fs.readFileSync('./data/portfolio-items.json'), undefined, 2);
var blog = JSON.parse(fs.readFileSync('./data/blog-posts.json'), undefined, 2);

//Setting view engine and static files
app.set('view engine', 'pug');
app.use(express.static('public'));

//Setting environment variables
const port = process.env.PORT || 3000;

//Starting server
app.listen (port, (success)=> {
  console.log(`Server started on port ${port}`);
});

//Rendering index template and passing JSON data
app.get('/', (req, res)=>{
  res.render ('index', {
    portfolio: portfolio.posts,
    blog: blog.posts
  });
});