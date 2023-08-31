import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DeleveryPage from './pages/DeliveryPage/DeliveryPage';
import StoreCategoryPage from './pages/StoreCategoryPage/StoreCategoryPage';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop.tsx';
import StoreIntroducePage from './pages/StoreIntroducePage/StoreIntroducePage.tsx';
import PreparationPage from './pages/PreparationPage/PreparationPage.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/delivery'} element={<DeleveryPage />} />
        <Route path={'/delivery/category/:shopList'} element={<StoreCategoryPage />} />
        <Route path={'/delivery/category/:shopList/:shopName'} element={<StoreIntroducePage />} />
        <Route path={'/*'} element={<PreparationPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
