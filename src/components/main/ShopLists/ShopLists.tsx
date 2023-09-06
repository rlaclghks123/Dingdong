import { css } from '@emotion/react';

import { itemWidthObj } from '../../../constants/itemConstatns';

import ShopListsItem from '../../common/ShopListsItem/ShopListsItem';
// import useGetShopList from '../../../hooks/useGetShopList';
import { useErrorBoundary } from 'react-error-boundary';
import { useEffect, useState } from 'react';
import { CreateShopListDataResponse, createStoresDataResponse } from '../../../mocks/data/dingdongWorld';

const Wrapper = css`
  margin: 16px;
`;

const ItmeBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
`;

export const SHOP_LIST_SIZE = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE',
};

interface ShopListsProps {
  size: string;
}
const ShopLists = ({ size }: ShopListsProps) => {
  // const { data } = useGetShopList();
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState<CreateShopListDataResponse[]>(createStoresDataResponse());

  const useGetShopList = async () => {
    try {
      setData(createStoresDataResponse());
    } catch (error) {
      showBoundary(error);
    }
  };

  useEffect(() => {
    useGetShopList();
  }, []);

  return (
    <div css={Wrapper}>
      <div css={ItmeBox}>
        <ShopListsItem items={data} itemWidth={itemWidthObj.shopList} size={size} />
      </div>
    </div>
  );
};

export default ShopLists;
