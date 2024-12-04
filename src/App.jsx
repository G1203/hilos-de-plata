import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import { Home, About, Galery, News } from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hilos-de-plata" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="galery" element={<Galery />} />
          <Route path="news" element={<News />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
