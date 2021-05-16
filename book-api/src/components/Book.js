import React from "react";
import "../css/MyLibrary.css";

function Book(props) {
  const title = props.book.title.toString().replace(/(<([^>]+)>)/gi, "");
  const author = props.book.author.toString().replace(/(<([^>]+)>)/gi, "");

  return (
    <div className="book">
      <div className="plusIcon">
        <img src="/image/plus.png" width="30px"></img>
      </div>
      <a href={props.book.link}>
        <img src={props.book.image} className="bookImage"></img>
      </a>
      <div>
        <a href={props.book.link} className="bookTitle">
          {title}
        </a>
        <br></br>
        <p className="bookAuthor">저자 : {author}</p>
      </div>
    </div>
  );
}

export default Book;
