import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";
import moment from "moment";

const ArticleDetails = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/";

  const [article, setArticle] = useState<IArticle>();
  const params = useParams();

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(URL + params.articleId);

      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <>
      {article ? (
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row className="justify-content-center">
            <Col md={8}>
              {/* <Card className="bg-custom-dark border-0">
                <Card.Img className="border-0" variant="top" src={article.image_url} />
                <Card.Body className="p-4">
                  <Card.Text className="text-custom-darkgray mb-1">{article.published_at}</Card.Text>
                  <Card.Text className="text-custom-darkgray mb-1">{article.updated_at}</Card.Text>
                  <Card.Title className="text-custom-white display-5 mb-4">{article.title}</Card.Title>
                  <Card.Text className="text-custom-darkgray">{article.summary}</Card.Text>
                  <Card.Text className="text-custom-darkgray">{article.news_site}</Card.Text>
                  <Card.Text className="text-custom-darkgray">{article.featured}</Card.Text>
                </Card.Body>
              </Card> */}
              <Card className="bg-custom-dark border-0 shadow">
                <Card.Img variant="top" src={article.image_url} />
                <Card.Body className="p-5 d-flex flex-column">
                  <div className="mb-3">
                    <Card.Title className="text-custom-white display-5 mb-4">{article.title}</Card.Title>
                    <Card.Text className="text-custom-darkgray">{article.summary}</Card.Text>
                  </div>
                  {/* <Card.Text className="text-custom-darkgray">{article.featured}</Card.Text> */}
                  <Card.Text className="fw-bold text-custom-white">{article.news_site}</Card.Text>
                  <div className="mt-auto">
                    <Card.Text className="text-custom-darkgray mb-0">
                      <span>Pubblicato il: </span>
                      {moment(article.published_at).format("MM/DD/YYYY")}
                    </Card.Text>
                    <Card.Text className="text-custom-darkgray mb-1">
                      <span>Aggiornato il: </span>
                      {moment(article.updated_at).format("MM/DD/YYYY")}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      )}
    </>
  );
};

export default ArticleDetails;
