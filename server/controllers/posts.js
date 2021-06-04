const Post = require('../models/Post')

async function index(req, res) {
  try {
    let posts = await Post.find({});
    return res.json(posts);
  } catch (err) {
    return res.json(err);
  }
};

async function create(req, res) {
  try {
    let post = await Post.create(req.body);
    return res.json(post);
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  index,
  create,
}
