import express from "express";
import User from "./Models/User.js";
import users from "./data/users.js";
import Product from "./Models/Product.js";
import products from "./data/Products.js";
import asyncHandler from "express-async-handler";

const Seed = express.Router();

Seed.post(
  "/users",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

Seed.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

export default Seed;
