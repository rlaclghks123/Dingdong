import { useRef, useState, useEffect } from 'react';
import { CreateShopListDataResponse } from '../mocks/data/dingdongWorld';
import { SortProps } from '../pages/DeliveryPage/DeliveryPage';

interface CarouselProps {
  items: CreateShopListDataResponse[] | SortProps[];
  itemWidth: number;
  isLoading?: boolean;
  itemGap?: number;
  autoPlay?: boolean;
  autoPlayDuration?: number;
}

const useDrag = ({
  items,
  itemWidth,
  isLoading = false,
  itemGap = 0,
  autoPlay = false,
  autoPlayDuration = 2000,
}: CarouselProps) => {
  const carouselItemsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const minPosition = items ? -(itemWidth * items.length + itemGap * (items.length - 1)) + itemWidth : 0;
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

  const autoScroll = () => {
    if (!isDragging) {
      const movedDistance = moveTowardX(endPosition - itemWidth - itemGap);
      setEndPosition(movedDistance);
      if (carouselItemsRef.current) carouselItemsRef.current.style.transform = `translateX(${movedDistance}px)`;
    }
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
  }, [isDragging, isLoading]);

  useEffect(() => {
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? setIsMobile(true) : setIsMobile(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (autoPlay) interval = setInterval(autoScroll, autoPlayDuration);
    return () => clearInterval(interval);
  }, [isDragging, endPosition, isLoading]);

  return { carouselItemsRef, isDragging, isMobile, startPosition, endPosition };
};

export default useDrag;
