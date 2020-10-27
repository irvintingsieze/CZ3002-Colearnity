/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const Vote = require('./Vote');
const Post = require('./Post');

const commentSchema = new Schema(
  {
    text: {
      type: String,
    },
    _commenter: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    votes: {
      type: Number,
    },
    _post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true },
);
/*
const populateComments = function (next) {
  this.populate({
    path: 'comments',
    select: 'commenter createdAt text votes',
  });
  next();
}; */

// commentSchema.pre('find', populateComments);
// commentSchema.pre('findById', populateComments);

const cascadeDelete = async function (next) {
  const comment = await this.model.findOne(this.getQuery());
  console.log(`Removing Comment cascadeDelete ${comment._id}`);
  Vote.remove({ _comment: comment._id }).exec();
  next();
};
/*
const cascadeDeleteRemove = function (next) {
  console.log(`Removing Comment cascadeDelete ${this._id}`);
  this.model('Vote').remove({ _comment: this._id }).exec();
  next();
}; */

const deleteFromParent = async function (next) {
  const comment = await this.model.findOne(this.getQuery());
  console.log(`Removing Comment deleteFromParent ${comment._id}`);
  Post.updateOne(
    { _comments: comment._id },
    { $pull: { _comments: comment._id } },
  ).exec();
  next();
};

/*
const deleteFromParentRemove = function (next) {
  console.log(`Removing Comment deleteFromParent ${this._id}`);
  Post.updateOne(
    { _comments: this._id },
    { $pull: { _comments: this._id } },
  ).exec();
  next();
}; */

commentSchema.pre('remove', function (next) {
  console.log(`Remove comment middleware called${this._id}`);
  Vote.remove({ _comment: this._id }).exec();
  next();
});
commentSchema.pre('findOneAndDelete', cascadeDelete);
// commentSchema.pre('remove', deleteFromParentRemove);
commentSchema.pre('findOneAndDelete', deleteFromParent);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
