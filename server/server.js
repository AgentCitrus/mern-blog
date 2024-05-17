const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-blog');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Schema for Comments
const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

// Schema for Blog Post
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    comments: { type: [commentSchema], default: [] } // Embedding comments within the post document
});

const Post = mongoose.model('Post', postSchema)

// Retrieve all posts from MongoDB
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

// Add a new blog post
app.post('/posts', async (req, res) => {
    console.log(req.body);
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
});

// Delete a blog post
app.delete('/posts/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json(( { message: 'Post deleted successfully' } ));
});