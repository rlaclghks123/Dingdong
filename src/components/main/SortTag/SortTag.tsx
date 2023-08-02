import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import UseDrag from '../../../hooks/UseDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { sortList } from '../../../pages/DeliveryPage/DeliveryPage';
import { itemGapObj, itemWidthObj } from '../../constants/itemConstatns';
import { useState } from 'react';

interface SortTagProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div<{ itemGap: number }>`
  display: flex;
  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
`;

const Button = styled.button<{ width: number }>`
  border-radius: 8px;
  width: ${({ width }) => (width ? `${width}px` : '120px')};

  p {
    font-size: 16px;
    padding: 8px;
    border-radius: 16px;
    background-color: ${theme.grey100};
  }
`;

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
      <Wrapper itemGap={itemGapObj.sortTag}>
        {itemLists.map((item, index) => (
          <div key={index}>
            <Button width={itemWidthObj.sortTag} data-id={index} onClick={handleClick}>
              <p>{item.title}</p>
            </Button>
          </div>
        ))}
      </Wrapper>
    </DragCarousel>
  );
};

export default SortTag;
