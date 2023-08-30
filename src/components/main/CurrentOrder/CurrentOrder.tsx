import { DragDirectionBox, Wrapper } from './CurrentOrder.style';
import CurrentOrderHeader from './CurrentOrderHeader';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import useDrag from '../../../hooks/useDrag';
import useGetShopList from '../../../hooks/useGetShopList';
import ShopListsItem from '../../common/ShopListsItem/ShopListsItem';

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
  const { data, isLoading, isError } = useGetShopList();
  const { carouselItemsRef, isMobile, isDragging, startPosition } = useDrag({
    items: data,
    itemWidth: SHOP_LIST_ITEM_WIDTH.currentOrder,
    itemGap: SHOP_LIST_ITEM_GAP.currentOrder,
    isLoading,
  });

  return (
    <section css={Wrapper}>
      {isLoading && <div>로딩중...</div>}
      {!isLoading && (
        <>
          <CurrentOrderHeader />
          <DragCarousel isMobile={isMobile} carouselItemsRef={carouselItemsRef} isDragging={isDragging}>
            <div css={DragDirectionBox(SHOP_LIST_ITEM_GAP.currentOrder)}>
              <ShopListsItem
                items={data}
                itemWidth={SHOP_LIST_ITEM_WIDTH.currentOrder}
                size={SHOP_LIST_ITEM_SIZE.medium}
                carouselItemsRef={carouselItemsRef}
                startPosition={startPosition}
              />
            </div>
          </DragCarousel>
        </>
      )}
    </section>
  );
};
export default CurrentOrder;
