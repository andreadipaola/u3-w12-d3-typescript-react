import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
