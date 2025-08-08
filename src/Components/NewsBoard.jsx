// import { useEffect } from "react";
// import { useState } from "react";
// import NewsIteam from "./NewsIteam";

// const NewsBoard = (props) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     let url=`https://gnews.io/api/v4/top-headlines?country=in&lang=${props.en}&category=${props.categary}&apikey=e8b545a25e02a3e2216bf7dc59716917`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setArticles(data.articles));
//   }, [props.categary,props.en]);

//   const newarticales = articles.map((news) => {
//     return (
//       <NewsIteam
//         key={news.id}
//         title={news.title}
//         description={news.description}
//         src={news.image}
//         url={news.url}
//       />
//     );
//   });

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest<span className="badge bg-danger ">News</span>
//       </h2>
//       {newarticales}
//     </div>
//   );
// };

// export default NewsBoard;
// NewsBoard.jsx
import { useEffect, useState } from "react";
import NewsIteam from "./NewsIteam";

const NewsBoard = (props) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let url = `https://gnews.io/api/v4/top-headlines?country=in&lang=${props.en}&category=${props.categary}&apikey=e8b545a25e02a3e2216bf7dc59716917`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [props.categary, props.en]);

  const newsArticles = articles.map((news) => (
    <NewsIteam
      key={news.id}
      title={news.title}
      description={news.description}
      src={news.image}
      url={news.url}
    />
  ));

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <div className="alert alert-warning text-center">
          😞 Sorry, today's API request limit has been reached. Please try again tomorrow.
        </div>
      ) : (
        <div className="row">{newsArticles}</div>
      )}
    </div>
  );
};

export default NewsBoard;
