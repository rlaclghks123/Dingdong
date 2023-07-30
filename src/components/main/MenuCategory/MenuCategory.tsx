import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MenuItemsProps {
  link: string;
  name: string;
  icon: ReactNode;
}

interface MenuCategoryProps {
  menuItems: MenuItemsProps[];
}

const GRID_LENGTH = 5;

const Wrapper = css`
  display: grid;
  grid-template-columns: repeat(${GRID_LENGTH}, 1fr);

  padding: ${commonStyle.boxSidePadding};

  background-color: white;
`;

const MenuItemBox = css`
  padding: 8px;

  svg {
    fill: orangered;
  }
`;

const LinkBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = css`
  font-size: 8px;
`;

const EmptyItems = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Dot = css`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: black;
`;

const MenuCategory = ({ menuItems }: MenuCategoryProps) => {
  const getNumberOfDots = (menuItems: MenuItemsProps[]) => {
    const emptyItemsCount = GRID_LENGTH - (menuItems.length % GRID_LENGTH);
    const emptyItemList = Array.from({ length: emptyItemsCount }).fill(null);
    if (emptyItemList.length !== 5) return emptyItemList;
  };

  const emptyItemList = getNumberOfDots(menuItems) || [];

  return (
    <section css={Wrapper}>
      {menuItems.map((item, idx) => (
        <div css={MenuItemBox} key={idx}>
          <Link css={LinkBox} to={item.link}>
            <span>{item.icon}</span>
            <span css={Name}>{item.name}</span>
          </Link>
        </div>
      ))}

      {emptyItemList.map((_, idx) => (
        <div css={EmptyItems} key={`empty-${idx}`}>
          <span css={Dot}></span>
        </div>
      ))}
    </section>
  );
};

export default MenuCategory;
