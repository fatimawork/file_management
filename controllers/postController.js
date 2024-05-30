const fs = require('fs');
const axios = require('axios');

const dataFile = 'data/data.json';

exports.fetchAndSavePosts = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data.slice(0, 10);
        fs.writeFileSync(dataFile, JSON.stringify(posts));
        res.send('Posts saved successfully.');
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

exports.getPosts = (req, res) => {
    try {
        const posts = JSON.parse(fs.readFileSync(dataFile));
        res.json(posts);
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

exports.getPostById = (req, res) => {
    const postId = parseInt(req.params.postId);
    try {
        const posts = JSON.parse(fs.readFileSync(dataFile));
        const post = posts.find(p => p.id === postId);
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        res.status(500).send(error.toString());
    }
};
