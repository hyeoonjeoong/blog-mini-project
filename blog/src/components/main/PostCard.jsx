import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const params = useParams();

  const clickPostCard = () => {
    navigate("/post/${props.postingId}");
  };
  return (
    <>
      <div className="postingCard">
        <div className="postingHeader">
          <div>title: {post.title}</div>
          <div>🩵 {post.like}</div>
        </div>
        <div className="postingBody" onClick={clickPostCard}>
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
