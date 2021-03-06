import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import About from "../pages/about/about";
import DubiousDoctrines from "../pages/dubious-doctrines/dubiousDoctrines";
import ArticlesRoute from "./articles-route";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dubious-doctrines" element={<DubiousDoctrines />} />
        <Route path="/articles/*" element={<ArticlesRoute />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
