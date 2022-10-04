import express from "express";
import Product from "../Models/Product";
import asyncHandler from "express-async-handler";

const productRoute = express.Router();

//Get all
productRoute.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}
));

productRoute.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}
));

productRoute.post("/:id", asyncHandler(async (req, res) => {
    const product = await Product.find(req.params.id);
    res.json(product);
}
));

productRoute.patch("/:id", asyncHandler(async (req, res) => {
    const product = await Product.find(req.params.id);
    res.json(product);
}
));