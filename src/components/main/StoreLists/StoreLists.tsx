import { css } from '@emotion/react';
import StoreListsItem from '../../common/StoreListsItem/StoreListsItem';
import commonStyle from '../../../styles/common';
import { mainItems } from '../../../pages/MainPage/HomePage';
import { itemWidthObj } from '../../constants/itemConstatns';
import { useState } from 'react';

const Wrapper = css`
  margin: ${commonStyle.boxFullMargin};
`;

const ItmeBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const storeListSizes = {
  small: 'SMALL',
  large: 'LARGE',
};

const StoreLists = () => {
  const [itemLists, setItemLists] = useState(mainItems);

  return (
    <div css={Wrapper}>
      <div css={ItmeBox}>
        <StoreListsItem items={itemLists} itemWidth={itemWidthObj.storeLists} size={storeListSizes.large} />
      </div>
    </div>
  );
};

export default StoreLists;
