import express from "express";
import User from "../Models/User";

const userRoute = express.Router();

userRoute.get("/", asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
}))

userRoute.get("/:id", asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}))