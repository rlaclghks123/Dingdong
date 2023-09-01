import Layout from '../../layouts/Layout';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import PopularMenuList from '../../components/main/PopularMenuList/PopularMenuList';
import WholeMenuList from '../../components/main/WholeMenuList/WholeMenuList';
import { useNavigate, useParams } from 'react-router-dom';
import useGetShopList from '../../hooks/useGetShopList';
import { useEffect } from 'react';

const ShopDetailPage = () => {
  const { shopName } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetShopList();

  useEffect(() => {
    if (data) {
      const shopNames = data?.map((item: any) => item.info.title);
      if (!shopNames.includes(shopName)) {
        navigate('/404', { replace: true });
      }
    }
  }, [data, navigate, shopName]);

  return (
    <>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <Layout>
          <MainHeader />
          <PopularMenuList />
          <WholeMenuList />
        </Layout>
      )}
    </>
  );
};

export default ShopDetailPage;
