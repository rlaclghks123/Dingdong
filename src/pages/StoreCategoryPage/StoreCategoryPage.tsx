import Layout from '../../layouts/Layout';
import { headerLeftData, headerRightData } from '../DeliveryPage/DeliveryPage';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import Nav from '../../components/nav/Nav';

const StoreCategory = () => {
  return (
    <Layout>
      <MainHeader leftItem={headerLeftData} rightItem={headerRightData} />
      <div>1</div>
      <Nav />
    </Layout>
  );
};

export default StoreCategory;
