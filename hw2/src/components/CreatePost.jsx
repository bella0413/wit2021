import React from "react";
import styled from "styled-components";

const Center = styled.div`
    width: 74%;
    margin: 5% auto;
    display: grid;
    column-gap: 15px;
    row-gap: 10px;
    grid-template-columns: 1fr 4fr 1fr;
`;
const Postfield = styled.textarea`
    background-color: #ffffff;
    display: inline-block;
    box-shadow: 3px 3px 30px 10px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    border: none;
    padding: 15px;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    &::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #b8b8b8;
    }
`;
const SubmitButton = styled.button`
    font-size: 90px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    background-color: #ffffff;
    box-shadow: 3px 3px 30px 10px rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    color: #000000;
    border: none;
    padding: 20px;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    rows: ${(props) => props.rows || 1};
    &:hover {
        background: #6d6d6d;
        color: #ffffff;
    }
    transition: color 0.5s, background-color 0.5s;
`;
function CreatePost({ user, title, body, onChange, onCreate }) {
    return (
        <Center>
            <Postfield
                name="user"
                placeholder="User"
                value={user}
                onChange={onChange}
                gridColumn="1 / 2"
                gridRow="1 / 2"
            ></Postfield>
            <Postfield
                name="title"
                placeholder="Title"
                value={title}
                onChange={onChange}
                gridColumn="2 / 3"
                gridRow="1 / 2"
            ></Postfield>
            <Postfield
                name="body"
                placeholder="Body"
                value={body}
                onChange={onChange}
                rows="10"
                gridColumn="1 / 3"
                gridRow="2 / 3"
            ></Postfield>
            <SubmitButton onClick={onCreate} gridColumn="3 / 4" gridRow="1/ 3">
                +
            </SubmitButton>
        </Center>
    );
}

export default CreatePost;
