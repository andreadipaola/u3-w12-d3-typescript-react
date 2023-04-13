import { Card } from "react-bootstrap";
import { IArticlesProps } from "../interfaces/IArticleProps";
import { Link } from "react-router-dom";

const Article = ({ article }: IArticlesProps) => {
  return (
    <Link to={"/article-details/" + article.id}>
      <Card id="cardArticle" className="bg-custom-dark border-0 shadow">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body className="p-4">
          {/* <Card.Text className="text-custom-darkgray mb-1">{article.published_at}</Card.Text>
                  <Card.Text className="text-custom-darkgray mb-1">{article.updated_at}</Card.Text> */}
          <Card.Title className="text-custom-white display-5 mb-4 text-truncate">{article.title}</Card.Title>
          <div className="d-flex flex-column justify-content-between">
            <Card.Text className="text-custom-darkgray">{article.summary}</Card.Text>
            <Card.Text className="text-custom-darkgray mt-auto">{article.news_site}</Card.Text>
            {/* <Card.Text className="text-custom-darkgray">{article.featured}</Card.Text> */}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Article;
