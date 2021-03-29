import React from "react";
import "../css/post.css";

const Post = (props) => {
    return (
        <div className="post">
            <div className="row">
                <div className="title">User</div>
                <div className="content">{props.userId}</div>
            </div>
            <div className="row">
                <div className="title">Title</div>
                <div className="content">{props.title}</div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="title">Body</div>
                <div className="content">{props.body}</div>
            </div>
        </div>
    );
};

export default Post;
