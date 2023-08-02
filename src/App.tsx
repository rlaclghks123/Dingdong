import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DeleveryPage from './pages/DeliveryPage/DeliveryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/delivery'} element={<DeleveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
