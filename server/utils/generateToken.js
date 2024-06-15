import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in the environment variables");
  process.exit(1); // exit the process with an error code if jwt secret doesnt exist
}

const generateCookieAndSetToken = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15d' });

    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
      httpOnly: true, // prevent cross-site scripting attacks (cookie is not accessible using js)
      sameSite: "strict", // prevent CSRF attacks (cross-site request forgery)
      secure: process.env.NODE_ENV !== "development", // use secure cookies in production
    });
  } catch (error) {
    console.error("Error generating token and setting cookie:", error.message);
    throw new Error("Token generation failed");
  }
}

export default generateCookieAndSetToken;
