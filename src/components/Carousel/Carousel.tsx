import React, { useRef, useState, useEffect, ReactElement } from 'react';
import { Item } from '../../pages/MainPage/HomePage';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface CarouselProps {
  items: Item[];
  itemWidth?: number;
  itemGap?: number;
  children: ReactElement;
}

interface IIsmobile {
  $ismobile: boolean;
}

interface ExtendedHTMLDivElement extends HTMLDivElement {
  startPosition: number;
}

export interface CarouselChildProps {
  items: Item[];
  itemWidth: number;
  itemGap?: number;
  carouselItemsRef?: React.RefObject<ExtendedHTMLDivElement>;
}

const Wrapper = styled.div<IIsmobile>`
  overflow: hidden;

  ${({ $ismobile }) =>
    $ismobile &&
    css`
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;
      scrollbar-width: none;
    `}
`;

const Carousel = ({ items, itemWidth = 150, itemGap = 0, children }: CarouselProps) => {
  const carouselItemsRef = useRef<ExtendedHTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const moveTowardX = (movedDistance: number) => {
    const totalCarouselWidth = itemWidth * items.length + itemGap * (items.length - 1);
    const [minPosition, maxPosition] = [-totalCarouselWidth + itemWidth, 0];

    if (movedDistance < minPosition) return minPosition;
    if (movedDistance > maxPosition) return maxPosition;
    return movedDistance;
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    setStartPosition(event.clientX);
    setIsDragging(true);
    if (carouselItemsRef.current) carouselItemsRef.current.startPosition = event.clientX;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const movedDistance = moveTowardX(endPosition - startPosition + event.clientX);
    if (carouselItemsRef.current) carouselItemsRef.current.style.transform = `translateX(${movedDistance}px)`;
  };

  const handleMouseUp = (event: MouseEvent) => {
    if (!isDragging) return;
    const movedDistance = moveTowardX(endPosition - startPosition + event.clientX);
    setEndPosition(movedDistance);
    setIsDragging(false);
  };

  useEffect(() => {
    const carouselItems = carouselItemsRef.current;

    carouselItems?.addEventListener('mousedown', handleMouseDown);
    window?.addEventListener('mousemove', handleMouseMove);
    window?.addEventListener('mouseup', handleMouseUp);

    return () => {
      carouselItems?.addEventListener('mousedown', handleMouseDown);
      window?.removeEventListener('mousemove', handleMouseMove);
      window?.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    isMobile ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <Wrapper $ismobile={isMobile}>
      <div ref={isMobile === true ? null : carouselItemsRef}>{React.cloneElement(children, { carouselItemsRef })}</div>
    </Wrapper>
  );
};

export default Carousel;
