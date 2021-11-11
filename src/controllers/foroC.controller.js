// profile controller
const Foro = require('../models/post.model');
const router = require('express').Router();



router.route('/').get((req, res) => {
  Like.find()
    .then(allcomments => res.json(allcomments))
    .catch(err => res.status(400).json('Error! ' + err))
})
router.route('/:foroId').get((req, res) => {
  Post.findById(req.params.foroId)
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error! ' + err))
})
router.route('/').post((req, res) => {
  const newComment = new Post(req.body)

  newComment.save()
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json("Error! " + err))
})
router.route('/:foroId').delete((req, res) => {
  Post.deleteOne({ _id: req.params.foroId })
    .then(comment => res.json('Success! User deleted.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/:foroId').put((req, res) => {
  Post.findByIdAndUpdate(req.params.foroId, req.body)
    .then(like => res.json('Success! profile updated.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router