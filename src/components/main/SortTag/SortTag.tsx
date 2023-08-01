import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { DragContainer } from '../CurrentOrder/CurrentOrder';
import UseDrag, { CarouselChildProps } from '../../../hooks/UseDrag';

interface WrapperProps {
  itemGap: number;
}

interface ButtonProps {
  width: number;
}

interface SortTagProps extends CarouselChildProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
`;

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  width: ${({ width }) => (width ? `${width}px` : '120px')};

  p {
    font-size: 16px;
    padding: 8px;
    border-radius: 16px;
    background-color: ${theme.grey100};
  }
`;

const SortTag = ({ items, itemWidth, setIsClicked, itemGap = 16 }: SortTagProps) => {
  const { carouselItemsRef, isMobile, startPosition } = UseDrag({ items, itemWidth, itemGap });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) {
      const id = Number(e.currentTarget.dataset.id);
      if (id === 0) setIsClicked(true);
      console.log(id);
    }
  };

  return (
    <DragContainer $ismobile={isMobile}>
      <div ref={carouselItemsRef}>
        <Wrapper itemGap={itemGap}>
          {items.map((item, index) => (
            <div key={index}>
              <Button width={itemWidth} data-id={index} onClick={handleClick}>
                <p>{item.title}</p>
              </Button>
            </div>
          ))}
        </Wrapper>
      </div>
    </DragContainer>
  );
};

export default SortTag;
