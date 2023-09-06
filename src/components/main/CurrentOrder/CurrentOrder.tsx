import { CurrentLoadingWrapper, DragDirectionBox, Wrapper } from './CurrentOrder.style';
import CurrentOrderHeader from './CurrentOrderHeader';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import useDrag from '../../../hooks/useDrag';
// import useGetShopList from '../../../hooks/useGetShopList';
import ShopListsItem from '../../common/ShopListsItem/ShopListsItem';
import { useEffect, useState } from 'react';
import { CreateShopListDataResponse, createStoresDataResponse } from '../../../mocks/data/dingdongWorld';

import { Spinner } from '../../../pages/LoadingPage/LoadingPage';

export const SHOP_LIST_ITEM_WIDTH = {
  currentOrder: 120,
};

export const SHOP_LIST_ITEM_GAP = {
  currentOrder: 16,
};

export const SHOP_LIST_ITEM_SIZE = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE',
};

const CurrentOrder = () => {
  // const { data, isLoading } = useGetShopList();

  const [data, setData] = useState<CreateShopListDataResponse[]>();
  const [isLoading, setIsLoading] = useState(true);

  const useGetShopList = () => {
    setTimeout(() => {
      setData(createStoresDataResponse());
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    useGetShopList();
  }, []);

  const { carouselItemsRef, isMobile, isDragging, startPosition } = useDrag({
    items: data as CreateShopListDataResponse[],
    itemWidth: SHOP_LIST_ITEM_WIDTH.currentOrder,
    itemGap: SHOP_LIST_ITEM_GAP.currentOrder,
    isLoading,
  });

  return (
    <>
      {isLoading ? (
        <div css={CurrentLoadingWrapper}>
          <div>
            <p>로딩중</p>
            <p css={Spinner}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
              </svg>
            </p>
          </div>
        </div>
      ) : (
        <section css={Wrapper}>
          <CurrentOrderHeader />
          <DragCarousel isMobile={isMobile} carouselItemsRef={carouselItemsRef} isDragging={isDragging}>
            <div css={DragDirectionBox(SHOP_LIST_ITEM_GAP.currentOrder)}>
              <ShopListsItem
                items={data as CreateShopListDataResponse[]}
                itemWidth={SHOP_LIST_ITEM_WIDTH.currentOrder}
                size={SHOP_LIST_ITEM_SIZE.medium}
                carouselItemsRef={carouselItemsRef}
                startPosition={startPosition}
              />
            </div>
          </DragCarousel>
        </section>
      )}
    </>
  );
};
export default CurrentOrder;
