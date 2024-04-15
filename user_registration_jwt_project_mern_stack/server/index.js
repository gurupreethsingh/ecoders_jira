require('dotenv').config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User, UserSession } = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/ecoders_jira")
  .then(() => {
    console.log("Connected successfully to MongoDB.")
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Function to register a new user
const registerUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ $or: [{ username: userData.username }, { email: userData.email }] });
    if (existingUser) {
      throw new Error('User with the same username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new User({
      fullname: userData.fullname,
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
      role: userData.role || 'user',
      profileImage: userData.profileImage || 'default-avatar.jpg',
      address: userData.address,
      joiningDate: userData.joiningDate || Date.now(),
    });

    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
};

// Route to create a new user
app.post("/register", async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Function to authenticate user and generate JWT token
const jwtSecret = process.env.JWT_SECRET; // Access JWT secret from environment variable

const loginUser = async (credentials) => {
    try {
      const user = await User.findOne({ $or: [{ email: credentials.usernameOrEmail }, { username: credentials.usernameOrEmail }] });
      if (!user) {
        throw new Error('User not found');
      }
  
      const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
      if (!isPasswordValid) {
        throw new Error('Incorrect password');
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
      const session = new UserSession({ userId: user._id });
      await session.save();
  
      // Include username in the response data
      return { user: { username: user.username }, token };
    } catch (error) {
      throw error;
    }
  };

// Route to handle user login
app.post("/login", async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const { user, token } = await loginUser({ usernameOrEmail, password });
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Middleware to verify JWT token and protect routes
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};

// Route to get user profile
app.get("/profile", authenticateUser, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to get user profile
app.get("/profile", authenticateUser, async (req, res) => {
    try {
      const userId = req.userId;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Return all details of the user
      res.json({
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        address: user.address,
        joiningDate: user.joiningDate
        // Add more fields as needed
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


app.listen(PORT, () => {
  console.log(`Server is successfully running at port ${PORT}`);
});
