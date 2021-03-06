
const express=require('express');
const  mongoose  = require('mongoose')
const { category } = require('../models/categories');
const {product} = require('../models/products');
const router=express.Router();


router.get("/", async (req, res) => {
  const productList = await product.find();

  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(productList);
});

router.get("/searchProduct", async (req, res) => {
  productList = await product.find(req.query);

  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(productList);
});



router.get("/search/:item", async (req, res) => {
  const itemSearch = req.params.item;

  productbycategory = (await category.find({ name: itemSearch }));
  let product_id
  if(productbycategory.length!=0)
  {
      product_id=productbycategory[0].id
  }
  let productList = [];
  if (Number.isInteger(Number(itemSearch))) {
   productList = await product.find({ price: itemSearch });
    if (productbyprice.length != 0) {
      res.status(200).send(productbyprice);
    }
  }

  productList = await product.find({
    $or: [
      { category: product_id},
      { producttype: `${itemSearch}` },
      { name: `${itemSearch}` },
    ],
  });
  if (productList) {
    res.status(200).send(productList);
  }
 
  else
    res.status(404).send("Not found any product belongs to keyword searched");
});
router.post(`/addProduct`, async (req, res) => {
  const cat = await category.find({name:req.body.category});
  let CategoryId
  if(cat.length!=0)
  {
    categoryId=cat[0].id
  }else{
    res.status(404).send("Invalid category")
  }

  if (!cat) return res.status(400).send("Invalid Category");

    const productObj = new product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: categoryId,
      producttype: req.body.producttype,
      features: req.body.features,
    });
  
  productget = await productObj.save();

  if (!productget) {
    return res.status(500).send("The product cannot be created");
  }

  res.status(200).send(productget);
});


router.delete("/deleteProduct/:id", (req, res) => {
  product
    .findByIdAndRemove(req.params.id)
    .then((product) => {
      if (product) {
        return res
          .status(200)
          .json({ success: true, message: "product deleted" });
      } else {
        return res
          .status(404)
          .json({
            success: false,
            messgae: "unable to delete as product does'nt exist",
          });
      }
    })
    .catch((err) => {
      return res.status(404).json({ success: false, error: err });
    });
});

router.put("/updateProduct/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("Inavlid Product Id");
  }

  const cat = await category.findById(req.body.category);

  if (!cat) {
    return res.status(400).send("Invalid Category");
  }

  const productlist = await product.findById(req.params.id);

  if (!product) {
    return res.status(400).send("Invalid product");
  }

  const productObj = await product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      producttype: req.body.producttype,
      features: req.body.features,
    },
    {
      new: true,
    }
  );

  if (!productObj) {
    return res.status(500).send("the product cannot be created");
  }

  return res.status(200).send(productObj);
});

module.exports = router;
