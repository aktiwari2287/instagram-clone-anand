import React, { useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
function Post({ username, imageUrl, caption }) {
 


  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" alt="" src={imageUrl}></Avatar>
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} alt="" className="post_image" />
      <h4 className="post_text">
        <b>{username} </b>Working on React
      </h4>
    </div>
  );
}

export default Post;
