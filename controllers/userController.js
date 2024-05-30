const axios = require('axios');

exports.getUsers = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data.slice(0, 10));
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

exports.getUserPosts = async (req, res) => {
    const userId = req.params.id;
    try {
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        res.json({
            user: userResponse.data,
            posts: postsResponse.data
        });
    } catch (error) {
        res.status(500).send(error.toString());
    }
};
