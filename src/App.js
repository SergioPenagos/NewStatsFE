import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/mainPage";
import AboutPage from "./pages/aboutPage";
import Container from "react-bootstrap/Container";
import GlobalStyle from "./Styles/fontStyle";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
