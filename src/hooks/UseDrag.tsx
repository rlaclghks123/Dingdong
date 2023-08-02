import React, { useRef, useState, useEffect } from 'react';
import { Item } from '../pages/MainPage/HomePage';

interface CarouselProps {
  items: Item[];
  itemWidth: number;
  itemGap?: number;
  autoPlay?: boolean;
  autoPlayDuration?: number;
}

export interface CarouselChildProps {
  items: Item[];
  itemWidth: number;
  itemGap?: number;
  carouselItemsRef?: React.RefObject<HTMLDivElement>;
}

const UseDrag = ({ items, itemWidth, itemGap = 0, autoPlay = false, autoPlayDuration = 3000 }: CarouselProps) => {
  const carouselItemsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const minPosition = -(itemWidth * items.length + itemGap * (items.length - 1)) + itemWidth;
  const maxPosition = 0;

  const moveTowardX = (movedDistance: number) => {
    if (movedDistance < minPosition) return minPosition;
    if (movedDistance > maxPosition) return maxPosition;
    return movedDistance;
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    setStartPosition(event.clientX);
    setIsDragging(true);
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
      carouselItems?.removeEventListener('mousedown', handleMouseDown);
      window?.removeEventListener('mousemove', handleMouseMove);
      window?.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? setIsMobile(true) : setIsMobile(false);
  }, []);

  const autoScroll = () => {
    if (!isDragging) {
      const movedDistance = moveTowardX(endPosition - itemWidth - itemGap);
      setEndPosition(movedDistance);
      if (carouselItemsRef.current) carouselItemsRef.current.style.transform = `translateX(${movedDistance}px)`;
    }
  };

  useEffect(() => {
    let interval: number;
    if (autoPlay) interval = setInterval(autoScroll, autoPlayDuration);
    return () => clearInterval(interval);
  }, [isDragging, endPosition]);

  return { carouselItemsRef, isDragging, isMobile, startPosition, endPosition };
};

export default UseDrag;
