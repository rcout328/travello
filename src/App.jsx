import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TravelSite from './components/travel-site'; // Ensure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TravelSite />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
