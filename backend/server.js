const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// MongoDB connection string
const mongoURI = "mongodb://127.0.0.1:27017/sns";
mongoose.connect(mongoURI);

// User model
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const User = mongoose.model('User', UserSchema);

// Blog schema
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
});
const Blog = mongoose.model('Blog', blogSchema);
// Post model
const PostSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
});
const Post = mongoose.model('Post', PostSchema);

// Middleware for token verification
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
     if (!token) return res.status(403).send('A token is required for authentication');
     try {
     req.user = jwt.verify(token.split(' ')[1], 'YOUR_SECRET_KEY'); // Split to remove 'Bearer'
     next();
     } catch (err) {
     return res.status(401).send('Invalid Token');
     }
     }

// Register user
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const user = new User({
            username: req.body.username, password: hashedPassword
        });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});
// Login user
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');
            res.json({ token });
            // console.log(token);
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('Error during login');
    }
});


// add blog

// Create a post
// app.post('/post', verifyToken, async (req, res) => {
//     try {
//         const post = new Post({
//             userId: req.user.userId, title: req.body.title,
//             content: req.body.content
//         });
//         await post.save();
//         res.status(201).send('Post created successfully');
//     } catch (error) {
//         res.status(500).send('Error creating post');
//     }
// });

// Get all posts
app.get('/posts', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send('Error fetching posts');
    }
});

// // Fetch a single post
// app.get('/posts/:postId', verifyToken, async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.postId);
//         if (!post) {
//             return res.status(404).send('Post not found');
//         }
//         res.json(post);
//     } catch (error) {
//         res.status(500).send('Error fetching post');
//     }
// });

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});