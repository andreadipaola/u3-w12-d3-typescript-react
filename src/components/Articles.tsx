import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import Article from "./Article";

const Articles = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles";
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const res = await fetch(URL);
      if (res.ok) {
        const data = await res.json();
        setArticles(data.results.slice(0, 9));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container className="mt-10 mb-10">
      <Row md={3} className="justify-content-center gy-3">
        {articles.map((article) => (
          <Col key={article.id} className="">
            <Article article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Articles;
