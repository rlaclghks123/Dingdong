import Layout from '../../layouts/Layout';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import { HeaderItem, Item } from '../MainPage/HomePage';
import Nav from '../../components/nav/Nav';
import AddressBox from '../../components/main/AddresBox/AddressBox';
import Banner from '../../components/main/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import RecommendMenu from '../../components/main/RecommendMenu/RecommendMenu';

const headerLeftData: HeaderItem[] = [
  {
    link: '/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    ),
  },
  {
    link: '/2',
    title: '배달',
  },
];

const headerRightData: HeaderItem[] = [
  {
    link: '/3',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
      </svg>
    ),
  },
  {
    link: '/4',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
      </svg>
    ),
  },
];

const items: Item[] = [
  {
    link: '/1',
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHwlRUMlOUQlOEMlRUMlOEIlOUR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    title: '도넛 삼산점',
  },
  {
    link: '/2',
    img: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '샌드위치 성남점',
  },
  {
    link: '/3',
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '햄버거 무거점',
  },
  {
    link: '/4',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
    title: '팬케이크 태화점 ',
  },
  {
    link: '/5',
    img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: '아이스크림 무거점',
  },
  {
    link: '/6',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
    title: '피자 삼호점',
  },
];

const menuItems = [];

const DeleveryPage = () => {
  return (
    <Layout>
      <MainHeader leftItem={headerLeftData} rightItem={headerRightData} />
      <div>
        <AddressBox />

        <Carousel items={items} itemWidth={360}>
          <Banner items={items} itemWidth={360} />
        </Carousel>

        <Carousel items={items} itemWidth={100} itemGap={16}>
          <RecommendMenu items={items} itemWidth={100} itemGap={16} />
        </Carousel>

        <div></div>
      </div>
      <Nav />
    </Layout>
  );
};
export default DeleveryPage;
