import User from "../models/User.js";
import bcryptjs from "bcryptjs"
import errorHandler from "../utilis/error.js";
import jwt from "jsonwebtoken"

export const signup = async (req,res) => {
   const {username, email, password, role} = req.body
   const hashedPassword = bcryptjs.hashSync(password, 10)
   
   const existingUser = await User.findOne({email})
   if(existingUser ) return res.status(400).json("Email already exist")

    const newUser = new User({username, email, password: hashedPassword, role})

    try {
        await newUser.save()
        res.status(201).json("user created successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      // Find user by username
      const validUser = await User.findOne({ username });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
  
      // Validate Password
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Invalid password!'));
  
      // Generate JWT token
      const token = jwt.sign({ id: validUser._id }, "hbcdsc43njm4jhjn537", { expiresIn: '1h' });
  
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }
  };