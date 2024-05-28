import { Link } from 'react-router-dom';
import { Wrapper, Li, Icon, Content, Ul, LinkStyle } from './Nav.styles';
import searchIcon from '../../../public/assets/navIcon/search-4-svgrepo-com.svg';
import heartIcon from '../../../public/assets/navIcon/heart-svgrepo-com.svg';
import noteIcon from '../../../public/assets/navIcon/note-1-svgrepo-com.svg';
import smileIcon from '../../../public/assets/navIcon/smile-wink-emoji-emoticon-svgrepo-com.svg';
import homeIcon from '../../../public/assets/navIcon/home-svgrepo-com.svg';

const navData = [
  {
    link: '/search',
    svgSrc: searchIcon,
    content: '검색',
  },

  {
    link: '/1',
    svgSrc: heartIcon,
    content: '찜',
  },

  {
    link: '/',
    svgSrc: homeIcon,
    content: '홈',
  },

  {
    link: '/4',
    svgSrc: noteIcon,
    content: '주문내역',
  },
  {
    link: '/5',
    svgSrc: smileIcon,
    content: 'my배민',
  },
];

const Nav = () => {
  return (
    <nav css={Wrapper}>
      <ul css={Ul}>
        {navData.map(item => {
          return (
            <li css={Li} key={item.link}>
              <Link css={LinkStyle} to={item.link}>
                <img css={Icon} src={item.svgSrc} alt="Image" />
                <span css={Content}>{item.content}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
