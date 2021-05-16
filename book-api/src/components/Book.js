import React from "react";

function Book(props) {
  return (
    <div className="book">
      <h2>{props.book.title}</h2>
    </div>
  );
}

export default Book;
