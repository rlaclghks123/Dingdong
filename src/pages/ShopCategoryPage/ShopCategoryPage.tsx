import { useState } from 'react';
import { css } from '@emotion/react';

import Layout from '../../layouts/Layout';
import { sortList } from '../DeliveryPage/DeliveryPage';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import SortModal from '../../components/Modal/SortModal';
import ShopLists, { SHOP_LIST_SIZE } from '../../components/main/ShopLists/ShopLists';
import SortTag from '../../components/main/SortTag/SortTag';

export const Wrapper = (isClicked: boolean) => css`
  ${isClicked &&
  `
      position: fixed;
      left: 0px;
      right: 0px;
      transform: translate(50% 0%);
 `}
`;

const ShopCategoryPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div css={Wrapper(isClicked)}>
      <Layout>
        <div
          css={css`
            position: fixed;
            width: 360px;
            padding-top: 16px;
            backdrop-filter: blur(8px);
          `}
        >
          <MainHeader />
          <SortTag sortList={sortList} setIsClicked={setIsClicked} />
        </div>
        <div
          css={css`
            padding-top: 24px;
          `}
        >
          <ShopLists size={SHOP_LIST_SIZE.small} />
        </div>
      </Layout>
      {isClicked && <SortModal sortList={sortList} setIsClicked={setIsClicked} />}
    </div>
  );
};

export default ShopCategoryPage;