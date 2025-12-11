const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const products = fs.readFileSync('data/products.json');
  res.json(JSON.parse(products));
});

router.get("/:id", (req, res) => {
  const products = fs.readFileSync('data/products.json');
  const p = JSON.parse(products);
  const product = p.find((pr) => {
    return pr.id === parseInt(req.params.id);
  });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

router.delete("/:id", (req, res) => {
  const products = fs.readFileSync('data/products.json');
  const updateProd = JSON.parse(products).filter((p) => {
    return p.id !== parseInt(req.params.id);
  });
  fs.writeFileSync('data/products.json', JSON.stringify(updateProd , null , 2));
  res.status(200).json({ message: "Product deleted successfully" });
});

router.post("/", (req, res) => {
  const products = JSON.parse(fs.readFileSync('data/products.json'));
  const newProduct = {
    id: products[products.length - 1].id + 1,
    product: req.body.product,
    price: req.body.price,
    img: req.body.img
  }
  const UpdatedProducts = [...products, newProduct];
  fs.writeFileSync("data/products.json",JSON.stringify(UpdatedProducts,null,2));
  res.status(201).json({message:"Product Created successfully"});
});

module.exports = router;