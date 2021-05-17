import React from "react";
import "../css/MyLibrary.css";

function Book(props) {
  const title = props.book.title.toString().replace(/(<([^>]+)>)/gi, "");
  const author = props.book.author.toString().replace(/(<([^>]+)>)/gi, "");
  const book = props.book;

  return (
    <div className="book">
      <input
        name="myBook"
        type="radio"
        onClick={props.saveInput}
        value={book.image}
        className="radio"
      ></input>
      <button className="plusIcon" onClick={props.saveBook}>
        <img src="/image/plus.png" width="30px"></img>
      </button>
      <a href={book.link}>
        <img src={book.image} className="bookImage"></img>
      </a>
      <div>
        <a href={book.link} className="bookTitle">
          {title}
        </a>
        <br></br>
        <p className="bookAuthor">저자 : {author}</p>
      </div>
    </div>
  );
}

export default Book;
