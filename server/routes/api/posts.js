const express = require('express');
const postsCtrl = require('../../controllers/posts');
const router = express.Router();

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);

module.exports = router
