import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';

import { itemWidthObj } from '../../../constants/itemConstatns';

import ShopListsItem from '../../common/ShopListsItem/ShopListsItem';
// import useGetShopList from '../../../hooks/useGetShopList';
import { useEffect, useRef, useState } from 'react';
import { CreateShopListDataResponse, createStoresDataResponse } from '../../../mocks/data/dingdongWorld';
import useInfinityScroll from '../../../hooks/useInfinityScroll';
import { Spinner } from '../../../pages/LoadingPage/LoadingPage';

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
  const [data, setData] = useState<CreateShopListDataResponse[]>(createStoresDataResponse());
  const footerRef = useRef<HTMLDivElement>(null);
  const { loading } = useInfinityScroll(footerRef, getNextData);

  const useGetShopList = async () => {
    setData(createStoresDataResponse());
  };

  function getNextData() {
    setData(prev => {
      const newData = [...data].map(item => {
        return { uid: uuidv4(), info: item.info };
      });
      return newData ? [...prev, ...newData] : prev;
    });
  }

  useEffect(() => {
    useGetShopList();
  }, []);

  return (
    <div css={Wrapper}>
      <div css={ItmeBox}>
        <ShopListsItem items={data} itemWidth={itemWidthObj.shopList} size={size} />
      </div>
      {loading && (
        <div
          ref={footerRef}
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
            `}
          >
            <p>로딩중</p>
            <p css={Spinner}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
              </svg>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopLists;
