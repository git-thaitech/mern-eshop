import express from "express";
import products from "./data/Products.js";
import dotenv, { config } from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import Seed from "./Seed.js";
import { errorHandler, notFound } from "./Middlewares/Errors.js";

dotenv.config(); //???
const app = express();

connectDatabase();
//LOAD ALL PRODUCTS FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(products);
});

//LOAD SINGLE PRODUCT FROM SERVER

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.use("/api/import", Seed);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);


app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5050;

app.listen(5000, console.log(`Server running port ${PORT}...`));