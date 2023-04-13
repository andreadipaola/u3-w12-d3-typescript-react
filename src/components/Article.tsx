import { Card } from "react-bootstrap";
import { IArticlesProps } from "../interfaces/IArticleProps";
import { Link } from "react-router-dom";
import moment from "moment";

const Article = ({ article }: IArticlesProps) => {
  return (
    <Link to={"/article-details/" + article.id}>
      <Card id="cardArticle" className="bg-custom-dark border-0 shadow">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body className="p-4 d-flex flex-column">
          <div className="mb-3">
            <Card.Title className="text-custom-white display-5 mb-4 text-truncate">{article.title}</Card.Title>
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
    </Link>
  );
};

export default Article;
