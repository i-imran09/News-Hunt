import { useEffect } from "react";
import { useState } from "react";
import NewsIteam from "./NewsIteam";

const NewsBoard = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.categary}/health/in.json`;
    //https://gnews.io/api/v4/top-headlines?category=${props.categary}&apikey=e8b545a25e02a3e2216bf7dc59716917
    let url=`https://gnews.io/api/v4/top-headlines?country=in&lang=ta&category=${props.categary}&apikey=e8b545a25e02a3e2216bf7dc59716917`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [props.categary]);

  const newarticales = articles.map((news) => {
    return (
      <NewsIteam
        key={news.id}
        title={news.title}
        description={news.description}
        src={news.image}
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
