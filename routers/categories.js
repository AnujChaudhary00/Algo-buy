const express=require('express');

const {category} = require('../models/categories');

const router=express.Router();

router.get('/',async (req,res)=>{
    const categoryList=await category.find();

    if(!categoryList)
    {
        res.status(500).json({success:false})
    }
    res.status(200).send(categoryList);
})


router.post(`/`,async (req,res)=>{
    let categoryObject=new category({
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color
    })

    categoryGet=await categoryObject.save();

    if(!categoryGet)
        return res.status(500).send("the category cannot be created!");
     
    res.status(200).send(categoryGet);
})

module.exports=router;






    








