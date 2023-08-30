import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UseDrag from '../../../hooks/useDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { itemList } from '../../../pages/DeliveryPage/DeliveryPage';
import { itemGapObj, itemWidthObj } from '../../../constants/itemConstatns';
import { Wrapper, Button, TitleBox } from './RecommendMenu.style';

const RecommendMenu = () => {
  const navigate = useNavigate();
  const [itemLists, setItemLists] = useState(itemList);

  const { carouselItemsRef, isMobile, isDragging, startPosition } = UseDrag({
    items: itemLists,
    itemWidth: itemWidthObj.recommendMenu,
    itemGap: itemGapObj.recommendMenu,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) navigate(itemLists[Number(e.currentTarget.dataset.id)].link || '');
  };

  return (
    <DragCarousel isMobile={isMobile} carouselItemsRef={carouselItemsRef} isDragging={isDragging}>
      <div css={Wrapper(itemGapObj.recommendMenu)}>
        {itemLists.map((item, index) => (
          <div key={index}>
            <button css={Button(item.img || '', itemWidthObj.recommendMenu)} onClick={handleClick} data-id={index}>
              <span css={TitleBox}>{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </DragCarousel>
  );
};

export default RecommendMenu;
