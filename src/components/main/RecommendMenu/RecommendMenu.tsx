import { css } from '@emotion/react';
import styled from '@emotion/styled';
import commonStyle from '../../../styles/common';
import { useNavigate } from 'react-router-dom';
import UseDrag from '../../../hooks/UseDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { itemList } from '../../../pages/DeliveryPage/DeliveryPage';
import { itemGapObj, itemWidthObj } from '../../constants/itemConstatns';
import { useState } from 'react';

interface ButtonProps {
  width: number;
  url: string;
}

const Wrapper = styled.div<{ itemGap: number }>`
  display: flex;

  padding: ${commonStyle.boxSidePadding};
  margin: ${commonStyle.boxUpAndDownMargin};

  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
`;

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : '120px')};
  height: 100px;

  background-image: url(${props => props.url});
  background-size: 100% 100%;

  border-radius: 16px;
`;

const TitleBox = css`
  height: 100%;
  width: 100%;
  padding: 16px 8px;
  text-align: start;
  color: white;
  font-size: 12px;
`;

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
      <div ref={carouselItemsRef}>
        <Wrapper itemGap={itemGapObj.recommendMenu}>
          {itemLists.map((item, index) => (
            <div key={index}>
              <Button
                css={Button}
                url={item.img || ''}
                width={itemWidthObj.recommendMenu}
                onClick={handleClick}
                data-id={index}
              >
                <p css={TitleBox}>{item.title}</p>
              </Button>
            </div>
          ))}
        </Wrapper>
      </div>
    </DragCarousel>
  );
};

export default RecommendMenu;
