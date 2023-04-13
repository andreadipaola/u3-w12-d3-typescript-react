import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Nav className="gap-3">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
    </Nav>
  );
};
export default CustomNavbar;
