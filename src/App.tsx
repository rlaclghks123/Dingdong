import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DeleveryPage from './pages/DeliveryPage/DeliveryPage';
import StoreCategoryPage from './pages/StoreCategoryPage/StoreCategoryPage';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop.tsx';
import StoreIntroducePage from './pages/StoreIntroducePage/StoreIntroducePage.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/:deliveryType'} element={<DeleveryPage />} />
        <Route path={'/:deliveryType/caterory/:storeList'} element={<StoreCategoryPage />} />
        <Route path={'/:deliveryType/caterory/:storeList/:storeDetail'} element={<StoreIntroducePage />} />
      </Routes>
    </Router>
  );
}

export default App;
