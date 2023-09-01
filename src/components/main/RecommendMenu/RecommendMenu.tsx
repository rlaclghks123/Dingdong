import { useNavigate } from 'react-router-dom';

import useDrag from '../../../hooks/useDrag';
import useGetShopList from '../../../hooks/useGetShopList';
import DragCarousel from '../../common/DragCarousel/DragCarousel';

import { itemGapObj, itemWidthObj } from '../../../constants/itemConstatns';
import { Wrapper, Button, TitleBox } from './RecommendMenu.style';
import { CreateShopListDataResponse } from '../../../mocks/data/dingdongWorld';

const RecommendMenu = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetShopList();

  const { carouselItemsRef, isMobile, isDragging, startPosition } = useDrag({
    items: data,
    isLoading,
    itemWidth: itemWidthObj.recommendMenu,
    itemGap: itemGapObj.recommendMenu,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) navigate(`/brands/${data[Number(e.currentTarget.dataset.id)].info.title}`);
  };

  return (
    <>
      {isLoading && <div>로딩중..</div>}
      {!isLoading && (
        <DragCarousel isMobile={isMobile} carouselItemsRef={carouselItemsRef} isDragging={isDragging}>
          <div css={Wrapper(itemGapObj.recommendMenu)}>
            {data?.map((item: CreateShopListDataResponse, index: number) => (
              <div key={item.uid}>
                <button
                  css={Button(item.info.image || '', itemWidthObj.recommendMenu)}
                  onClick={handleClick}
                  data-id={index}
                >
                  <span css={TitleBox}>{item.info.title}</span>
                </button>
              </div>
            ))}
          </div>
        </DragCarousel>
      )}
    </>
  );
};

export default RecommendMenu;
