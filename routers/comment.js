const { Router } = require("express");

const { showComments, createComment, showComment, editComment } = require("../controllers/wish");

const commentRouter = Router();

commentRouter.get("/:wishId/comments", showComments);
commentRouter.post("/:wishId/comments", createComment);
commentRouter.get("/:wishId/comments/:commentId", showComment);
commentRouter.patch("/:wishId/comments/:commentId", editComment);

module.exports = commentRouter;