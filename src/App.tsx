import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DeleveryPage from './pages/DeliveryPage/DeliveryPage';
import ShopCategoryPage from './pages/ShopCategoryPage/ShopCategoryPage.tsx';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop.tsx';
import ShopDetailPage from './pages/ShopDetailPage/ShopDetailPage.tsx';
import PreparationPage from './pages/PreparationPage/PreparationPage.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/delivery'} element={<DeleveryPage />} />
        <Route path={'/delivery/category/:shopList'} element={<ShopCategoryPage />} />
        <Route path={'/delivery/category/:shopList/:shopName'} element={<ShopDetailPage />} />
        <Route path={'/*'} element={<PreparationPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
