import { css } from '@emotion/react';
import StoreListsItem from '../StoreListsItem/StoreListsItem';
import commonStyle from '../../../styles/common';
import { Item } from '../../../pages/MainPage/HomePage';

interface StoreListsProps {
  mainItems: Item[];
}

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

const StoreLists = ({ mainItems }: StoreListsProps) => {
  return (
    <div css={Wrapper}>
      <div css={ItmeBox}>
        <StoreListsItem items={mainItems} itemWidth={332} size={storeListSizes.large} />
      </div>
    </div>
  );
};

export default StoreLists;
