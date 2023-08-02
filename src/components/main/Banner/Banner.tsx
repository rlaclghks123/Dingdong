import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import UseDrag, { CarouselChildProps } from '../../../hooks/UseDrag';
import { DragContainer } from '../CurrentOrder/CurrentOrder';
import theme from '../../../styles/theme';

interface ImgProps {
  width: number;
}

const Wrapper = css`
  display: flex;
  position: relative;
  background-color: white;
`;

const Img = styled.img<ImgProps>`
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

const SlideIndicator = css`
  position: absolute;
  border-radius: 16px;
  bottom: 8px;
  right: 8px;
  font-size: 8px;
  padding: 4px 16px;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${theme.grey100};
`;

const Banner = ({ items, itemWidth }: CarouselChildProps) => {
  const navigate = useNavigate();
  const autoPlay = true;
  const autoPlayDuration = 3000;
  const { carouselItemsRef, isDragging, isMobile, startPosition, endPosition } = UseDrag({
    items,
    itemWidth,
    autoPlay,
    autoPlayDuration,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) {
      navigate(items[Number(e.currentTarget.dataset.id)].link || '');
    }
  };

  return (
    <DragContainer $ismobile={isMobile}>
      <div
        ref={carouselItemsRef}
        css={
          !isDragging &&
          css`
            transition: transform 0.5s ease-in-out;
          `
        }
      >
        <div css={Wrapper}>
          {items.map((item, index) => (
            <button key={index} onClick={handleClick} data-id={index}>
              <Img width={itemWidth} src={item.img} alt={`${item.title} 사진`} />
              <p css={TitleBox}>{item.title}</p>
            </button>
          ))}
        </div>
      </div>
      <div css={SlideIndicator}>{`${Math.floor(-endPosition / itemWidth) + 1} / ${items.length}`}</div>
    </DragContainer>
  );
};

export default Banner;
