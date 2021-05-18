const { User } = require('../../models/index');
const { Board } = require('../../models/index');
const { Comment } = require('../../models/index');
const Sequelize = require('sequelize');


let addComment = async (req, res) => {
    let commentWriter = req.body.writer;
    let commentContent = req.body.comment_content;
    let commentAt = req.body.itemid;
    let commentResults = await Comment.create({commentWriter, commentContent, commentAt})
    let commentList = await Comment.findAll({
        where: {
            commentAt: req.body.itemid,
        },
        order: [['id', 'ASC']],
    });

    res.json({
        commentList,
    })

};

let addLike = async (req,res) => {
    console.log(cmt_like)

}

module.exports = {
    addComment,
    addLike
};