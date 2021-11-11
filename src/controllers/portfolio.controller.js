// profile controller
const Post = require('../models/portfolio.model');
const router = require('express').Router();



router.route('/').get((req, res) => {
  Post.find()
    .then(allPosts => res.json(allPosts))
    .catch(err => res.status(400).json('Error! ' + err))
})
router.route('/:postId').get((req, res) => {
  Post.findById(req.params.postId)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error! ' + err))
})
router.route('/').post((req, res) => {
  const newPost = new Post(req.body)

  newPost.save()
    .then(post => res.json(post))
    .catch(err => res.status(400).json("Error! " + err))
})
router.route('/:postId').delete((req, res) => {
  Post.deleteOne({ _id: req.params.postId })
    .then(post => res.json('Success! User deleted.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/:postId').put((req, res) => {
  Post.findByIdAndUpdate(req.params.postId, req.body)
    .then(profile => res.json('Success! profile updated.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router