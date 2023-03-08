import "./App.css";
// NOTE must npm install react-router-dom@latest
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home.js";
import Create from "./pages/create/Create.js";
import Search from "./pages/search/Search.js";
import Recipe from "./pages/recipe/Recipe.js";
import Navbar from "./components/navbar/Navbar.js";
function App() {
  return (
    <div className="App">
      <Router>
        {/* NOTE if you place a component outside of the routes then it will persist between pages. Very useful for a navbar or footer */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
