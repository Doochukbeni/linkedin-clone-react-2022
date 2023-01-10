import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]} </Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption title="Like" color="gray" Icon={ThumbUpAltOutlined} />
        <InputOption title="Comment" color="gray" Icon={ChatOutlined} />
        <InputOption title="Share" color="gray" Icon={ShareOutlined} />
        <InputOption title="send" color="gray" Icon={SendOutlined} />
      </div>
    </div>
  );
};

export default Post;
