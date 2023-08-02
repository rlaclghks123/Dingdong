import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import theme from '../../../styles/theme';

const DragContainer = styled.div<{ isMobile: boolean }>`
  overflow: hidden;
  position: relative;

  ${({ isMobile }) =>
    isMobile &&
    css`
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;
      scrollbar-width: none;
    `}
`;

const SlideIndicatorBox = css`
  position: absolute;
  bottom: 8px;
  right: 8px;

  border-radius: 16px;
  padding: 4px 16px;

  background-color: rgba(0, 0, 0, 0.4);
  color: ${theme.grey100};

  font-size: 8px;
`;

interface DragCarouselProps {
  isMobile: boolean;
  isDragging: boolean;
  carouselItemsRef: React.RefObject<HTMLDivElement>;
  slideIndicator?: string;
  children: ReactNode;
}
const DragCarousel = ({ isMobile, carouselItemsRef, isDragging, slideIndicator = '', children }: DragCarouselProps) => {
  return (
    <DragContainer isMobile={isMobile}>
      <div
        ref={carouselItemsRef}
        css={
          !isDragging &&
          css`
            transition: transform 0.5s ease-in-out;
          `
        }
      >
        {children}
      </div>
      {slideIndicator !== '' && <div css={SlideIndicatorBox}>{slideIndicator}</div>}
    </DragContainer>
  );
};

export default DragCarousel;
