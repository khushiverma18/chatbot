const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getProducts } = require('./database');
const path=require('path')
const ejsmate=require('ejs-mate')
const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));



const app = express();
const PORT =8080;

app.use(cors());
app.use(bodyParser.json());
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.engine('ejs',ejsmate);



//
app.get('/login',(req,res)=>{
  res.render('./user/login.ejs')
})
/*app.post('/login',saveUrl, passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),
async(req,res)=>{
    req.flash('success',"welcome to Wanderluct! you are logged in!")
    let redirectUrl=res.locals.redirectUrl||'/listing';
    res.redirect(redirectUrl)
})*/

//
app.get('/singup',(req,res)=>{
  res.render('./user/singup.ejs')
})
/*app.post('/singup',wrapasync(async(req,res)=>{
  let{username,email,password}=req.body;
  const newUser=new User({username,email});
  const reguser=await User.register(newUser,password)
  console.log(reguser);
  req.login(reguser, (err)=>{
      if(err){
          return next(err)
      }
      req.flash("success",'welcome to wanderluct!')
      res.redirect('/listing')
  })
  
}))*/
//
app.get('/shop', (req, res) => {
  res.render('./menu/shop.ejs')
});
// Route to fetch data and render it in EJS
app.get("/home", async (req, res) => {
  try {
    const products = await (Product.find({})); // Fetch products from MongoDB
    res.render("./menu/home.ejs", { products }); // Pass `products` to EJS template
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route to fetch products
app.get('/products', async (req, res) => {
    const query = req.query.query ? req.query.query.toLowerCase() : '';
    const products = await getProducts(query);
    res.json(products);
});

app.get('/chatbot', (req, res) => {
    res.render('./menu/chatbot.ejs')
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});