import { React, useState } from "react";
import Search from "./Search";
import "../css/MyLibrary.css";

function MyLibrary(props) {
  const [myBookList, setMyBookList] = useState([]);
  const [myBook, setMyBook] = useState([]);
  const saveBook = () => {
    console.log("saveBook 정상 작동");
    const book = myBook;
    console.log("book");
    console.log(book);
    if (book.length !== 0 && myBookList.indexOf(book) === -1) {
      setMyBookList([...myBookList, book]);
    }
    console.log(myBookList);
  };
  const saveInput = (e) => {
    console.log("saveInput execute");
    setMyBook(e.target.value);
    console.log("e.target.value");
    console.log(e.target.value);
    console.log("myBook");
    console.log(myBook);
  };
  const onRemove = (book) => {
    setMyBookList(myBookList.filter((mybook) => mybook !== book));
  };
  return (
    <div>
      <div>
        <h2 className="center myLibraryTitle">나의 서재</h2>
        <div className="myLibrary">
          {myBookList.length === 0 ? (
            <p className="noBookText">아직 서재에 책이 없습니다.</p>
          ) : (
            myBookList.map((book, index) => (
              <div key={index} className="myLibraryBook">
                <img src={book} width="82px" height="120px"></img>
                <button className="removeButton" onClick={() => onRemove(book)}>
                  <img src="/image/remove.png" width="20px"></img>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Search saveBook={saveBook} saveInput={saveInput}></Search>
    </div>
  );
}

export default MyLibrary;
