/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrapper, Box, Layout } from './MainHeader.styles';

interface HeaderItem {
  link: string;
  icon?: ReactNode;
  title?: string;
}

interface HeaderItemProps {
  leftItem: HeaderItem[];
  rightItem: HeaderItem[];
}

const Header = ({ leftItem, rightItem }: HeaderItemProps) => {
  const navigate = useNavigate();

  const renderHeaderRightItem = (item: HeaderItem, index: number) => {
    const { link, icon, title } = item;
    return (
      <div css={Layout} key={index}>
        <Link to={link}>
          {icon && <span>{icon}</span>}
          {title && <h1>{title}</h1>}
        </Link>
      </div>
    );
  };

  const renderHeaderLeftItem = (item: HeaderItem, index: number) => {
    const { icon, title } = item;
    return (
      <div css={Layout} key={index}>
        <button onClick={() => navigate(-1)}>
          <span>{icon}</span>
        </button>
        <h1>{title}</h1>
      </div>
    );
  };

  const renderHeaderRightItems = (data: HeaderItem[]) => {
    return data.map((item, index) => renderHeaderRightItem(item, index));
  };

  const renderHeaderLeftItems = (data: HeaderItem[]) => {
    return data.map((item, index) => renderHeaderLeftItem(item, index));
  };

  return (
    <div css={Wrapper}>
      <div css={Box}>{renderHeaderLeftItems(leftItem)}</div>
      <div css={Box}>{renderHeaderRightItems(rightItem)}</div>
    </div>
  );
};

export default Header;
