import Layout from '../../layouts/Layout';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import PopularMenuList from '../../components/main/PopularMenuList/PopularMenuList';
import WholeMenuList from '../../components/main/WholeMenuList/WholeMenuList';

const ShopDetailPage = () => {
  return (
    <Layout>
      <MainHeader />
      <PopularMenuList />
      <WholeMenuList />
    </Layout>
  );
};

export default ShopDetailPage;
