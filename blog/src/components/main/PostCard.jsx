import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPostingLike } from "../../apis/blog";
import userIcon from "../../assets/user.png";
import LoadThumbnail from "../common/LoadThumbnail";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(post.like);
  const [isFavorite, setIsFavorite] = useState(false);

  const clickPostCard = () => {
    navigate("/post/${props.postingId}", {
      state: { postingId: post.postingId },
    });
  };

  const clickLike = (post) => {
    getPostingLike(post.postingId).then((postingLike) => {
      setLikeCount(postingLike);
      console.log(likeCount);
      if (isFavorite === true) {
        post.like = likeCount;
      } else {
        post.like = likeCount + 1;
      }
      setIsFavorite(!isFavorite);
    });
  };
  return (
    <>
      <div className="postingCard">
        <div className="postingHeader">
          <div>
            {post.title.length > 15
              ? post.title.slice(0, 15) + ".."
              : post.title}
          </div>

          <div
            onClick={() => clickLike(post)}
            style={{ color: isFavorite === true ? "#496989" : "#D6DAC8" }}
          >
            ♥ {post.like}
          </div>
        </div>
        <div className="postingBody" onClick={clickPostCard}>
          {post.user.thumbnail ? (
            <img src={post.user.thumbnail} alt="img" />
          ) : (
            <LoadThumbnail />
          )}

          <div>
            {post.content.length > 100
              ? post.content.slice(0, 100) + ".."
              : post.content}
          </div>
        </div>
        <div className="postingFooter">
          <img src={post.user.profileImg || userIcon} alt="img" />
          <span>{post.user.nickname}</span>
        </div>
      </div>
    </>
  );
};

export default PostCard;
