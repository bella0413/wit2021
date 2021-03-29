import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";

const PostList = () => {
    const [postList, setPostList] = useState([]);

    const getPostList = async () => {
        console.log("===getPostList실행===");
        await fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => response.json())
            .then((json) => setPostList(json));
    };
    useEffect(() => {
        try {
            console.log("===useEffect 실행===");
            getPostList();
        } catch {}
    }, []);

    return (
        <div style={{ margin: "100px 0" }}>
            {postList.map((post, index) => (
                <Post
                    key={index}
                    userId={post.userId}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
};

export default PostList;
