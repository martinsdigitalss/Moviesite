import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <MovieProvider>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
