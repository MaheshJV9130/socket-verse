import express from "express";
import User from "../models/User.js";
import connectDatabase from "../lib/database.js";
const router = express.Router();

router.get("/friends", async (req, res) => {
    
    connectDatabase();
    const user = await User.findById(req.user.id)
      .populate("friends", "username profilePic email")
      .lean();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.friends);
  
});

router.post("/find-friend", async (req, res) => {
  const username = req.body.username
  connectDatabase()

  const users = await User.find({username : username})
  console.log(users)
    res.send(users)

});
export default router;
