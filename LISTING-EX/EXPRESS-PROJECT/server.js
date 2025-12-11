const express = require("express");
const productsRouter = require('./route/products.js');
const blogsRouter = require('./route/blogs.js');
const app = express();

const cors = require('cors');

app.use((req,res,next)=> {
  console.log(`${req.method} ${req.url}`);
  next();
})

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

app.use("/blogs", blogsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express" });
});

app.get("/about", (req, res) => {
  res.json({ message: "Node is a runtime environment" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});