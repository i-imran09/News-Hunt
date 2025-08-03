import { useEffect } from "react";
import { useState } from "react";
import NewsIteam from "./NewsIteam";

const NewsBoard = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.categary}/health/in.json`;
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.categary}&apiKey=a24577c5c3484242b955787e1056f600`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [props.categary]);

  const newarticales = articles.map((news,index) => {
    return (
      <NewsIteam
        key={index}
        title={news.title}
        description={news.description}
        src={news.urlToImage}
        url={news.url}
      />
    );
  });

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger ">News</span>
      </h2>
      {newarticales}
    </div>
  );
};

export default NewsBoard;
