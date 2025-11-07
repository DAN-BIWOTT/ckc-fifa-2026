import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChampionshipLanding from "./pages/ChampionshipLanding";
import BracketsPage from "./pages/BracketsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChampionshipLanding />} />
        <Route path="/brackets" element={<BracketsPage />} />
      </Routes>
    </Router>
  );
}
