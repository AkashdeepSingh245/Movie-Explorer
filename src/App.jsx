import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom"; // Add Navigate here
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* Add this line below to fix the 'blank page' issue */}
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;