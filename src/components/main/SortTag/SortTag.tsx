import { useState } from 'react';

import UseDrag from '../../../hooks/UseDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { sortList } from '../../../pages/DeliveryPage/DeliveryPage';
import { itemGapObj, itemWidthObj } from '../../constants/itemConstatns';
import { Wrapper, Button, Title } from './SortTag.style';

interface SortTagProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortTag = ({ setIsClicked }: SortTagProps) => {
  const [itemLists, setItemLists] = useState(sortList);

  const { carouselItemsRef, isDragging, isMobile, startPosition } = UseDrag({
    items: itemLists,
    itemWidth: itemWidthObj.sortTag,
    itemGap: itemGapObj.sortTag,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) {
      const id = Number(e.currentTarget.dataset.id);
      if (id === 0) setIsClicked(true);
      console.log(id);
    }
  };

  return (
    <DragCarousel isMobile={isMobile} carouselItemsRef={carouselItemsRef} isDragging={isDragging}>
      <div css={Wrapper(itemGapObj.sortTag)}>
        {itemLists.map((item, index) => (
          <div key={index}>
            <button css={Button(itemWidthObj.sortTag)} data-id={index} onClick={handleClick}>
              <span css={Title}>{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </DragCarousel>
  );
};

export default SortTag;
