import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CarouselChildProps } from '../../Carousel/Carousel';
import theme from '../../../styles/theme';

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

const TagBox = css``;

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

const SortTag = ({ items, itemWidth, itemGap = 16, setIsClicked, carouselItemsRef }: SortTagProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (carouselItemsRef?.current?.startPosition === e.clientX) {
      const id = Number(e.currentTarget.dataset.id);
      if (id === 0) setIsClicked(true);
      console.log(id);
    }
  };

  return (
    <>
      <Wrapper itemGap={itemGap}>
        {items.map((item, index) => (
          <div css={TagBox} key={index}>
            <Button width={itemWidth} data-id={index} onClick={handleClick}>
              <p>{item.title}</p>
            </Button>
          </div>
        ))}
      </Wrapper>
    </>
  );
};

export default SortTag;
