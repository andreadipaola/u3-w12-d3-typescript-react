import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/article-details/:articleId" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
