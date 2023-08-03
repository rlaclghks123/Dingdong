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
    <div css={DragContainer(isMobile)}>
      <div css={DragRefBox(isDragging)} ref={carouselItemsRef}>
        {children}
      </div>
      {slideIndicator !== '' && <div css={SlideIndicatorBox}>{slideIndicator}</div>}
    </div>
  );
};

export default DragCarousel;
