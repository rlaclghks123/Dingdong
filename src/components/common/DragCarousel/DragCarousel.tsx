import { ReactNode } from 'react';
import { DragContainer, SlideIndicatorBox, DragRefBox } from './DragCarousel.style';

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
      <DragRefBox ref={carouselItemsRef} isDragging={isDragging}>
        {children}
      </DragRefBox>
      {slideIndicator !== '' && <div css={SlideIndicatorBox}>{slideIndicator}</div>}
    </DragContainer>
  );
};

export default DragCarousel;
