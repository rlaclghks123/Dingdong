import { css } from '@emotion/react';
import styled from '@emotion/styled';
import commonStyle from '../../../styles/common';
import { useNavigate } from 'react-router-dom';
import { CarouselChildProps } from '../../Carousel/Carousel';
import UseDrag from '../../../hooks/UseDrag';
import { DragContainer } from '../CurrentOrder/CurrentOrder';

interface WrapperProps {
  itemGap: number;
}

interface ButtonProps {
  width: number;
  url: string;
}

const Wrapper = styled.div<WrapperProps>`
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

const RecommendMenu = ({ items, itemWidth, itemGap = 16 }: CarouselChildProps) => {
  const navigate = useNavigate();
  const { carouselItemsRef, isMobile } = UseDrag({ items, itemWidth, itemGap });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (carouselItemsRef?.current?.startPosition === e.clientX) {
      navigate(items[Number(e.currentTarget.dataset.id)].link || '');
    }
  };

  return (
    <DragContainer $ismobile={isMobile}>
      <div ref={carouselItemsRef}>
        <Wrapper itemGap={itemGap}>
          {items.map((item, index) => (
            <div key={index}>
              <Button css={Button} url={item.img || ''} width={itemWidth} onClick={handleClick} data-id={index}>
                <p css={TitleBox}>{item.title}</p>
              </Button>
            </div>
          ))}
        </Wrapper>
      </div>
    </DragContainer>
  );
};

export default RecommendMenu;
