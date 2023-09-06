import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DeleveryPage from './pages/DeliveryPage/DeliveryPage';
import ShopCategoryPage from './pages/ShopCategoryPage/ShopCategoryPage.tsx';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop.tsx';
import ShopDetailPage from './pages/ShopDetailPage/ShopDetailPage.tsx';
import PreparationPage from './pages/PreparationPage/PreparationPage.tsx';
import MenuDetailPage from './pages/MenuDetailPage/MenuDetailPage.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/delivery'} element={<DeleveryPage />} />
        <Route path={'/category/:shopList'} element={<ShopCategoryPage />} />
        <Route path={'/:brands/:shopName'} element={<ShopDetailPage />} />
        <Route path={'/detail/:menuName/:id'} element={<MenuDetailPage />} />
        <Route path={'/404'} element={<ErrorPage />} />
        <Route path={'/*'} element={<PreparationPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
