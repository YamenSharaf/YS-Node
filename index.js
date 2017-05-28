const fs = require('fs');
const express = require ('express'); const app = express();
var pd = JSON.parse(fs.readFileSync('./data/portfolio.json'), undefined, 2);
var posts = JSON.parse(fs.readFileSync('./data/blog-posts.json'), undefined, 2);

app.set('view engine', 'pug');
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.listen (port, (success)=> {
  console.log(`Server started on port ${port}`);
});


app.get('/', (req, res)=>{
  res.render ('index', {
    portfolio: pd.posts,
    blog: posts.posts
  });
});