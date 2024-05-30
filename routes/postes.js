const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/posts', postController.fetchAndSavePosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:postId', postController.getPostById);

module.exports = router;
