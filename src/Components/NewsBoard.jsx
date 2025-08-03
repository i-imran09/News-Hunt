import { useEffect, useState } from "react";
import NewsIteam from "./NewsIteam";

const NewsBoard = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.categary}&apiKey=a24577c5c3484242b955787e1056f600`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok" && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          setErrorMsg("Invalid response from API.");
          console.error("API returned:", data);
        }
      } catch (error) {
        setErrorMsg("Failed to fetch news.");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [props.categary]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading && <p className="text-center">Loading news...</p>}

      {errorMsg && <p className="text-danger text-center">{errorMsg}</p>}

      {!loading && !errorMsg && articles.length > 0 && (
        articles.map((news, index) => (
          <NewsIteam
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      )}

      {!loading && !errorMsg && articles.length === 0 && (
        <p className="text-center">No news found.</p>
      )}
    </div>
  );
};

export default NewsBoard;
