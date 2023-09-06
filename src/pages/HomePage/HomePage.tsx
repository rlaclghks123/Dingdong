import MainHeader from '../../components/header/MainHeader/MainHeader';
import Nav from '../../components/nav/Nav';
import SearchBar from '../../components/main/SearchBar/SearchBar';
import CategoryList from '../../components/main/CategoryList/CategoryList';
import CurrentOrder from '../../components/main/CurrentOrder/CurrentOrder';
import Layout from '../../layouts/Layout';
import { ReactNode } from 'react';
import bellIcon from '../../assets/headerIcon/bell-svgrepo-com.svg';
import cartIcon from '../../assets/headerIcon/cart-large-minimalistic-svgrepo-com.svg';

export interface Item {
  title: string;
  link?: string;
  img?: string;
  deliveryTime?: string;
  deliveryTip?: number;
  star?: number;
}

export interface HeaderItem {
  link: string;
  icon?: ReactNode;
  title?: string;
}

const HEADER_RIGHT_DATA = [
  {
    link: '/3',
    svgSrc: bellIcon,
  },
  {
    link: '/4',
    svgSrc: cartIcon,
  },
];

const category = [
  {
    link: '/delivery',
    title: '배달',
    contents: ['세상은 넓고', '맛집은 많다'],
  },
  {
    link: '/takeout',
    title: '포장',
    contents: ['가까운 가게는', '직접 가지러 가지요'],
  },
  {
    link: '/404',
    title: 'B마트',
    contents: ['지금 주문하면', '28분 후 도착'],
  },
  {
    link: '/4',
    title: '신선관',
    contents: ['제철 신선 식품', '지금 바로 배달'],
  },
];

const MainPage = () => {
  return (
    <Layout>
      <MainHeader rightData={HEADER_RIGHT_DATA} />
      <SearchBar />
      <CategoryList category={category} />
      <CurrentOrder />

      <Nav />
    </Layout>
  );
};
export default MainPage;
