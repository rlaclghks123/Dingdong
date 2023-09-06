import Layout from '../../layouts/Layout';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import PopularMenuList from '../../components/main/PopularMenuList/PopularMenuList';
import WholeMenuList from '../../components/main/WholeMenuList/WholeMenuList';
import { useNavigate, useParams } from 'react-router-dom';
// import useGetShopList from '../../hooks/useGetShopList';
import { useEffect, useState } from 'react';
import { CreateShopListDataResponse, createStoresDataResponse } from '../../mocks/data/dingdongWorld';
import LoadingPage from '../LoadingPage/LoadingPage';

const ShopDetailPage = () => {
  const { shopName } = useParams();
  const navigate = useNavigate();
  // const { data, isLoading } = useGetShopList();

  const [data, setData] = useState<CreateShopListDataResponse[]>();
  const [isLoading, setIsLoading] = useState(true);

  const useGetShopList = async () => {
    setData(createStoresDataResponse());
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    useGetShopList();
  }, []);

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
        <LoadingPage />
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
