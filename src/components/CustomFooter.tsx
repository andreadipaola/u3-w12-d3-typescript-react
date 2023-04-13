import { Container } from "react-bootstrap";

const MyFooter = () => (
  <div className="mt-5 bg-custom-dark text-custom-white fixed-bottom bg-opacity-90">
    <Container className="py-3">
      <p className=" text-custom-white m-0">Made with &#10084; in Italy, &copy; 2023 Andrea Di Paola</p>
    </Container>
  </div>
);

export default MyFooter;
