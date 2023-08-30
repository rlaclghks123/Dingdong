import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Wrapper, Box, Span, H1, Icon } from './MainHeader.styles';
import logo from '../../../assets/headerIcon/dingdong-logo.svg';
import backIcon from '../../../assets/headerIcon/back-svgrepo-com.svg';

interface IconInfo {
  link: string;
  svgSrc: string;
}

interface Props {
  rightData?: IconInfo[];
}

const SHIPPING_TYPE: { [key: string]: string } = {
  delivery: '배달',
  takeout: '포장',
};

const Header = ({ rightData }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { storeName } = useParams();

  const LeftBoxWithoutBtn = () => {
    return (
      <>
        <span css={Span}>
          <img css={Icon} src={logo} />
        </span>

        <span css={Span}>
          <h1 css={H1}>Ding Dong</h1>
        </span>
      </>
    );
  };

  const LeftBoxWithBtn = () => {
    return (
      <>
        <button onClick={() => navigate(-1)}>
          <span css={Span}>
            <img css={Icon} src={backIcon} />
          </span>
        </button>

        <span css={Span}>
          <h1 css={H1}>{storeName ? storeName : SHIPPING_TYPE[pathname.split('/')[1]] || '준비중'}</h1>
        </span>
      </>
    );
  };

  const RightBox = (data: IconInfo[]) => {
    return data.map(({ link, svgSrc }) => {
      return (
        <React.Fragment key={link}>
          <Link to={link}>
            <span css={Span}>
              <img css={Icon} src={svgSrc} alt={'Img'} />
            </span>
          </Link>
        </React.Fragment>
      );
    });
  };

  return (
    <div css={Wrapper}>
      <div css={Box}>{pathname === '/' ? <LeftBoxWithoutBtn /> : <LeftBoxWithBtn />}</div>
      <div css={Box}>{rightData && RightBox(rightData)}</div>
    </div>
  );
};

export default Header;
