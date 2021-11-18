const ForoQuestion = require("../models/foroQuestion.model");
const Comment = require("../models/comment.model");
const Like = require("../models/like.model");
const router = require("express").Router();

router.route("/").get((req, res) => {
    const query = req.query ? req.query : [];
    Foro.find(query)
        .then((allForoQuestions) => res.json(allForoQuestions))
        .catch((err) => res.status(400).json("Error! " + err));
});
router.route("/:foroQuestionId").get((req, res) => {
    Foro.findById(req.params.foroId)
        .populate("comments")
        .populate("likes")
        .populate("user_info")
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error! " + err));
});
router.route("/").post((req, res) => {
    const newForoQuestion = new ForoQuestion(req.body);

    newForoQuestion
        .save()
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error! " + err));
});
//Creating comments into foro
router.route("/comment/:foroQuestionId").post((req, res) => {
    //in this part we are going to create a new endpoint to added the comment into the post

    Comment.create(req.body).then((comment) => {
        //if a comment was created succesfully, let's go to find one (findOne)post with an _id equal to req.params.postId. Update is for our post in order to be associdated with a new comment
        //{new:true} tells the query that we want it to return the updated post
        return Foro.findOneAndUpdate(
            { _id: req.params.postId },
            { $push: { comments: comment._id } },
            { new: true }
        )
            .then((post) => res.json(post))
            .catch((err) => res.status(400).json("Error! " + err));
    });
});
router.route("/like/:foroQuestionId").post((req, res) => {
    //in this part we are going to create a new endpoint to added the comment into the post

    Like.create(req.body).then((like) => {
        //if a comment was created succesfully, let's go to find one (findOne)post with an _id equal to req.params.postId. Update is for our post in order to be associdated with a new comment
        //{new:true} tells the query that we want it to return the updated post
        return Post.findOneAndUpdate(
            { _id: req.params.postId },
            { $push: { likes: like._id } },
            { new: true }
        )
            .then((post) => res.json(post))
            .catch((err) => res.status(400).json("Error! " + err));
    });
});

router.route("/:foroQuestionId").delete((req, res) => {
    Foro.deleteOne({ _id: req.params.foroId })
        .then((post) => res.json("Success! foro deleted."))
        .catch((err) => res.status(400).json("Error! " + err));
});

router.route("/:foroQuestionId").put((req, res) => {
    Foro.findByIdAndUpdate(req.params.foroId, req.body)
        .then((profile) => res.json("Success! foro updated."))
        .catch((err) => res.status(400).json("Error! " + err));
});

module.exports = router;
