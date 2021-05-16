import React from "react";
import axios from "axios";
import { useState } from "react";
import Book from "./Book";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function Search(props) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const URL = "/v1/search/book.json";
  const ID_KEY = 네이버 클라이언트 아이디
  const SECRET_KEY = 네이버 클라이언트 시크릿

  const getSearchResult = async () => {
    try {
      console.log("getSearchResult 실행");
      if (query === "") {
        setIsLoading(false);
        setMessage("검색어를 입력해주세요");
      } else {
        console.log("axios 실행");
        await axios
          .get(URL, {
            params: {
              query: query,
              display: 8,
              sort: "count",
            },
            headers: {
              "X-Naver-Client-Id": ID_KEY,
              "X-Naver-Client-Secret": SECRET_KEY,
            },
          })
          .then(function (response) {
            console.log("this is api response");
            console.log(response.data.items);
            if (response.data.items.length === 0) {
              setIsLoading(false);
              setMessage("검색결과가 없습니다.");
            } else {
              setIsLoading(true);
              setSearchResult(response.data.items);
            }
          })
          .catch(function (error) {
            if (error.response) {
              // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답함
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              console.log(error.message);
            } else if (error.request) {
              // 요청이 이루어 졌으나 응답을 받지 못함
              // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
              // Node.js의 http.ClientRequest 인스턴스
              console.log(error.request);
            } else {
              // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생함
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      }
    } catch (error) {
      setMessage(error);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="searchBar">
        <InputGroup className="mb-3" size="lg">
          <FormControl
            type="text"
            placeholder="검색할 책의 이름 또는 저자명을 입력하세요."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") getSearchResult();
            }}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={getSearchResult}>
              검색
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>

      {isLoading ? (
        <ul>
          {searchResult.map((book, index) => (
            <li key={index}>
              <Book book={book}></Book>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="center">{message}</h3>
      )}
    </div>
  );
}

export default Search;
