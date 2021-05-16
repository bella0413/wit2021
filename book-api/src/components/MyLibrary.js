import React from "react";
import Search from "./Search";
import "../css/MyLibrary.css";

function MyLibrary(props) {
  return (
    <div>
      <div>
        <h2 className="center">나의 서재</h2>
      </div>
      <hr></hr>
      <Search></Search>
    </div>
  );
}

export default MyLibrary;
