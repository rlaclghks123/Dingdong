import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { menuItems } from '../../../pages/DeliveryPage/DeliveryPage';
import {
  Wrapper,
  MenuItemBox,
  LinkBox,
  Name,
  EmptyItems,
  Dot,
  GRID_LENGTH,
  MenuCategoryBox,
} from './MenuCategory.style';

interface MenuItemsProps {
  link: string;
  name: string;
  icon: ReactNode;
}

const MenuCategory = () => {
  const [itemLists, setItemLists] = useState(menuItems);

  const getNumberOfDots = (itemLists: MenuItemsProps[]) => {
    const emptyItemsCount = GRID_LENGTH - (itemLists.length % GRID_LENGTH);
    const emptyItemList = Array.from({ length: emptyItemsCount }).fill(null);
    if (emptyItemList.length !== GRID_LENGTH) return emptyItemList;
  };

  const emptyItemList = getNumberOfDots(itemLists) || [];

  return (
    <section css={Wrapper}>
      <div css={MenuCategoryBox}>
        {itemLists.map((item, idx) => (
          <div css={MenuItemBox} key={idx}>
            <Link css={LinkBox} to={item.link}>
              <span>{item.icon}</span>
              <span css={Name}>{item.name}</span>
            </Link>
          </div>
        ))}

        {emptyItemList.map((_, idx) => (
          <div css={EmptyItems} key={`empty-${idx}`}>
            <span css={Dot} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
