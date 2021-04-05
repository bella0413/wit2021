import React from "react";

function CreatePost({ user, title, body, onChange, onCreate }) {
    return (
        <div>
            <div>
                <div>
                    <input
                        name="user"
                        placeholder="User"
                        value={user}
                        onChange={onChange}
                    ></input>
                    <input
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={onChange}
                    ></input>
                </div>
                <div>
                    <input
                        name="body"
                        placeholder="Body"
                        value={body}
                        onChange={onChange}
                    ></input>
                </div>
            </div>
            <div>
                <button onClick={onCreate}>submit</button>
            </div>
        </div>
    );
}

export default CreatePost;
