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
    link: '/2',
    title: '포장',
    contents: ['가까운 가게는', '직접 가지러 가지요'],
  },
  {
    link: '/3',
    title: 'B마트',
    contents: ['지금 주문하면', '28분 후 도착'],
  },
  {
    link: '/4',
    title: '신선관',
    contents: ['제철 신선 식품', '지금 바로 배달'],
  },
];

export const mainItems: Item[] = [
  {
    link: '/1',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHwlRUMlOUQlOEMlRUMlOEIlOUR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    title: '도넛 삼산점',
    deliveryTime: '40~60분',
    star: 5,
    deliveryTip: 3000,
  },
  {
    link: '/2',
    img: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '샌드위치 성남점',
    deliveryTime: '40~60분',
    star: 5,
    deliveryTip: 3000,
  },
  {
    link: '/3',
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '햄버거 무거점',
    deliveryTime: '40~60분',
    star: 5,
    deliveryTip: 3000,
  },
  {
    link: '/4',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
    title: '팬케이크 태화점 ',
    deliveryTime: '40~60분',
    star: 5,
    deliveryTip: 3000,
  },
  {
    link: '/5',
    img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '아이스크림 무거점',
    deliveryTime: '40~60분',
    star: 5,
    deliveryTip: 3000,
  },
  {
    link: '/6',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
    title: '피자 삼호점',
    deliveryTime: '40~60분',
    star: 5,
    deliveryTip: 3000,
  },
];

const MainPage = () => {
  return (
    <Layout>
      <MainHeader rightData={HEADER_RIGHT_DATA} />
      <div>
        <SearchBar />
        <CategoryList category={category} />
        <CurrentOrder />
      </div>

      <Nav />
    </Layout>
  );
};
export default MainPage;
