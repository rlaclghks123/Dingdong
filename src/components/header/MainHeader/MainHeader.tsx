import { ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Wrapper, Box, Layout, Span, H1 } from './MainHeader.styles';

interface LeftHeaderInterface {
  link: string;
  icon?: ReactNode;
  title?: string;
}

interface StoreDetailInterface {
  delivery: string;
  takeout: string;
  [prop: string]: string;
}

const headerLeftData = {
  homeIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
    </svg>
  ),
  backIcon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  ),
};

const headerRightData: LeftHeaderInterface[] = [
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

const STORE_NAMES: StoreDetailInterface = {
  delivery: '배달',
  takeout: '포장',
};

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let { storeName, deliveryType = 'delivery' } = useParams();

  const LeftHomeItem = () => {
    return (
      <div css={Layout}>
        <span css={Span}>{headerLeftData.homeIcon}</span>
        <h1 css={H1}>Ding Dong</h1>
      </div>
    );
  };

  const LeftBackItem = () => {
    return (
      <div css={Layout}>
        <button onClick={() => navigate(-1)}>
          <span css={Span}>{headerLeftData.backIcon}</span>
        </button>
        <h1 css={H1}>{storeName ? storeName : STORE_NAMES[deliveryType]}</h1>
      </div>
    );
  };

  const RightItems = (data: LeftHeaderInterface[]) => {
    return data.map(({ link, icon, title }) => {
      return (
        <div css={Layout} key={link}>
          <Link to={link}>
            {icon && <span css={Span}>{icon}</span>}
            {title && <h1 css={H1}>{title}</h1>}
          </Link>
        </div>
      );
    });
  };

  return (
    <div css={Wrapper}>
      <div css={Box}>{pathname === '/' ? <LeftHomeItem /> : <LeftBackItem />}</div>
      <div css={Box}>{RightItems(headerRightData)}</div>
    </div>
  );
};

export default Header;
