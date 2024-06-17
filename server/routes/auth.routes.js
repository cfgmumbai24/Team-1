import express from "express";
import bcrypt from 'bcryptjs'
import User from "../models/user.model.js";
import generateCookieAndSetToken from "../utils/generateToken.js";

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
      const { phoneNumber, password } = req.body;

      // Find user by phone number
      const user = await User.findOne({ phoneNumber });

      // Check if user exists
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ error: "Invalid password" });
      }

      // Update lastLogin field with current date and time
      user.lastLogin = new Date();
      await user.save();

      // Generate JWT token and set cookie
      generateCookieAndSetToken(user._id, res);

      // Respond with user data
      res.status(200).json({
          _id: user._id,
          name: user.name,
          phoneNumber: user.phoneNumber,
          age: user.age,
          language: user.language,
          gender: user.gender,
          state: user.state,
          role: user.role,
          profilePic: user.profilePic
      });
  } catch (error) {
      console.error("Error in user login:", error.message);
      res.status(500).json({ error: "Internal server error" });
  }
});


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


router.get('/active-users', async (req, res) => {
  const tenDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000); // 10 days in milliseconds
  
  try {
      const activeUsers = await User.find({ lastLogin: { $gte: tenDaysAgo } });

      res.status(200).json(activeUsers);
  } catch (error) {
      res.status(500).json({ message: `Error fetching active users: ${error.message}` });
  }
});


export default router