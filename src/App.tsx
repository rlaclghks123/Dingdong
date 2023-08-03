import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DeleveryPage from './pages/DeliveryPage/DeliveryPage';
import StoreCategoryPage from './pages/StoreCategoryPage/StoreCategoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/delivery'} element={<DeleveryPage />} />
        <Route path={'/caterory/:id'} element={<StoreCategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
