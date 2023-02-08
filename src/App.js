import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopAlbums from "./pages/TopAlbums";
import AlbumWithSongs from "./pages/AlbumWithSongs";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Top 50</h1>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<TopAlbums />} />
          <Route path="/album/:id" element={<AlbumWithSongs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
