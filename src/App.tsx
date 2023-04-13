import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/article-details/:articleId" element={<ArticleDetails />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
