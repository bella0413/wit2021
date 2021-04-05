import React from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { useState, useEffect } from "react";

const PostList = () => {
    const [postList, setPostList] = useState([]);
    const [inputs, setInputs] = useState({
        user: "",
        title: "",
        body: "",
    });
    const { user, title, body } = inputs;

    const getPostList = async () => {
        console.log("===getPostList실행===");
        await fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => response.json())
            .then((json) => setPostList(json));
    };
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onCreate = () => {
        if (user && title && body) {
            const post = {
                user,
                title,
                body,
            };
            setPostList([...postList, post]);
            console.log(postList);
            setInputs({
                user: "",
                title: "",
                body: "",
            });
        } else {
            alert("Please fill out all fields!");
        }
    };
    useEffect(() => {
        try {
            console.log("===useEffect 실행===");
            getPostList();
        } catch {}
    }, []);

    return (
        <div style={{ margin: "100px 0" }}>
            <CreatePost
                user={user}
                title={title}
                body={body}
                onChange={onChange}
                onCreate={onCreate}
            ></CreatePost>
            {postList.map((post, index) => (
                <Post
                    key={index}
                    userId={post.userId || post.user}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
};

export default PostList;
