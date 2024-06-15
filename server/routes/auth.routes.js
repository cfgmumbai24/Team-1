import express from "express";
import bcrypt from 'bcryptjs'
import User from "../models/user.model.js";
import generateCookieAndSetToken from "../utils/generateToken.js";

const router = express.Router();

router.post('/login', async (req, res) => {
   try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPasswordCorrect){
      return res.status(400).json({error: "Invalid username or password"})
    }

    generateCookieAndSetToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
    })
    
   } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({error: "Internal server error"});
   }
})

router.post('/logout', (req, res) => {
    try {
      res.cookie("jwt", "", {maxAge: 0});
      res.status(200).json({message: "Logged out succesfully!"})
      
    } catch (error) {
      console.log("Error in login controller", error.message);
      res.status(500).json({error: "Internal server error"});
    }
})

router.post('/signup', async (req, res) => {
  try {
      const { name, phoneNumber, age, language, gender, state, role, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
          return res.status(400).json({ error: "Passwords don't match" });
      }

      const userExists = await User.findOne({ phoneNumber });
      if (userExists) {
          return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const boyPic = `https://avatar.iran.liara.run/public/boy?username=${name}`;
      const girlPic = `https://avatar.iran.liara.run/public/girl?username=${name}`;

      const newUser = new User({
          name,
          phoneNumber,
          age,
          language,
          gender,
          state,
          role,
          password: hashedPassword,
          profilePic: gender === "male" ? boyPic : girlPic
      });

      if (newUser) {
          // Generate JWT token
          generateCookieAndSetToken(newUser._id, res);
          await newUser.save();
          res.status(201).json({
              _id: newUser._id,
              name: newUser.name,
              phoneNumber: newUser.phoneNumber,
              age: newUser.age,
              language: newUser.language,
              gender: newUser.gender,
              state: newUser.state,
              role: newUser.role,
              profilePic: newUser.profilePic
          });
      } else {
          console.log("Invalid user data");
          res.status(400).json({ error: "Invalid user data" });
      }

  } catch (error) {
      res.status(500).json({ error: "Internal server error" });
      console.log("Error in user signup: ", error.message);
  }
});



export default router