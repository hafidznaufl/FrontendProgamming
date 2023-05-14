import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/movies/Create";
import Popular from "./pages/movies/Popular";
import NowPlaying from "./pages/movies/NowPlaying";
import TopRated from "./pages/movies/TopRated";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<Create />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now" element={<NowPlaying />}></Route>
          <Route path="/movie/top" element={<TopRated />}></Route>
        </Routes>
      </Layout>
      {/* <Navbar />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
