import React from "react";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="postingCard">
        <div className="postingHeader">
          <div>title: {post.title}</div>
          <div>🩵 {post.like}</div>
        </div>
        <div className="postingBody">
          <div>content: {post.content}</div>
          <div>postingId: {post.postingId}</div>
        </div>
        <div className="postingFooter">
          <div>userId: {post.user.userId}</div>
          <div>nickname: {post.user.nickname}</div>
          <div>profileImg: {post.user.profileImg}</div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
