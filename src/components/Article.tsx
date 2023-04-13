import { Card } from "react-bootstrap";
import { IArticlesProps } from "../interfaces/IArticleProps";
import { Link } from "react-router-dom";

const Article = ({ article }: IArticlesProps) => {
  return (
    <Link to={"/article-details/" + article.id}>
      <Card className="mb-3 text-dark">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title className="text-truncate">{article.title}</Card.Title>
          <Card.Text className="text-truncate">{article.summary}</Card.Text>
          <Card.Title>{article.news_site}</Card.Title>
          {/* <Card.Title>{article.published_at}</Card.Title>
        <Card.Title>{article.updated_at}</Card.Title> */}
          <Card.Title>{article.featured}</Card.Title>

          {/* <Button variant="info">{article.featured}€</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Article;
