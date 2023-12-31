import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useDrag from '../../../hooks/useDrag';
// import useGetShopList from '../../../hooks/useGetShopList';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { itemWidthObj } from '../../../constants/itemConstatns';

import { DragItemWrapper, Img, TitleBox } from './Banner.style';
import { CreateShopListDataResponse, createStoresDataResponse } from '../../../mocks/data/dingdongWorld';

const Banner = () => {
  const navigate = useNavigate();
  // const { data, isLoading } = useGetShopList();

  const [data, setData] = useState<CreateShopListDataResponse[]>();
  const [isLoading, setLoading] = useState(true);

  const useGetShopList = () => {
    setData(createStoresDataResponse());
    setLoading(false);
  };

  useEffect(() => {
    useGetShopList();
  }, []);

  const { carouselItemsRef, isDragging, isMobile, startPosition, endPosition } = useDrag({
    items: data as CreateShopListDataResponse[],
    itemWidth: itemWidthObj.banner,
    isLoading,
    autoPlay: true,
    autoPlayDuration: 3000,
  });

  const slideIndicator = data ? `${Math.floor(-endPosition / itemWidthObj.banner) + 1} / ${data.length}` : '0';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX && data) navigate(`/brands/${data[Number(e.currentTarget.dataset.id)].info.title}`);
  };

  return (
    <>
      <DragCarousel
        isMobile={isMobile}
        carouselItemsRef={carouselItemsRef}
        isDragging={isDragging}
        slideIndicator={slideIndicator}
      >
        <div css={DragItemWrapper}>
          {data?.map((item: CreateShopListDataResponse, index: number) => (
            <button key={item.uid} onClick={handleClick} data-id={index}>
              <img css={Img(itemWidthObj.banner)} src={item.info.image} alt={`${item.info.title} 사진`} />
              <span css={TitleBox}>{item.info.title}</span>
            </button>
          ))}
        </div>
      </DragCarousel>
    </>
  );
};

export default Banner;
