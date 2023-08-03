import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import UseDrag from '../../../hooks/UseDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { itemWidthObj } from '../../constants/itemConstatns';
import { itemList } from '../../../pages/DeliveryPage/DeliveryPage';
import { DragItemWrapper, Img, TitleBox } from './Banner.style';

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
            <img css={Img(itemWidthObj.banner)} src={item.img} alt={`${item.title} 사진`} />
            <span css={TitleBox}>{item.title}</span>
          </button>
        ))}
      </div>
    </DragCarousel>
  );
};

export default Banner;
