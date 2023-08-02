import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import UseDrag from '../../../hooks/UseDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { itemWidthObj } from '../../constants/itemConstatns';
import { itemList } from '../../../pages/DeliveryPage/DeliveryPage';
import { useState } from 'react';

const DragItemWrapper = css`
  display: flex;
  position: relative;
`;

const Img = styled.img<{ width: number }>`
  width: ${({ width }) => (width ? `${width}px` : '360px')};
  height: 150px;
`;

const TitleBox = css`
  position: absolute;
  width: 100%;
  height: 100%;

  padding: 16px;

  text-align: left;

  color: white;
`;

const Banner = () => {
  const navigate = useNavigate();
  const [itemLists, setItemLists] = useState(itemList);

  const { carouselItemsRef, isDragging, isMobile, startPosition, endPosition } = UseDrag({
    items: itemLists,
    itemWidth: itemWidthObj.banner,
    autoPlay: true,
    autoPlayDuration: 3000,
  });

  const slideIndicator = `${Math.floor(-endPosition / itemWidthObj.banner) + 1} / ${itemList.length}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) navigate(itemLists[Number(e.currentTarget.dataset.id)].link || '');
  };

  return (
    <DragCarousel
      isMobile={isMobile}
      carouselItemsRef={carouselItemsRef}
      isDragging={isDragging}
      slideIndicator={slideIndicator}
    >
      <div css={DragItemWrapper}>
        {itemLists.map((item, index) => (
          <button key={index} onClick={handleClick} data-id={index}>
            <Img width={itemWidthObj.banner} src={item.img} alt={`${item.title} 사진`} />
            <p css={TitleBox}>{item.title}</p>
          </button>
        ))}
      </div>
    </DragCarousel>
  );
};

export default Banner;
