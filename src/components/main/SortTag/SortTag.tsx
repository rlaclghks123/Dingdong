import useDrag from '../../../hooks/useDrag';
import DragCarousel from '../../common/DragCarousel/DragCarousel';
import { itemGapObj, itemWidthObj } from '../../../constants/itemConstatns';
import { Wrapper, Button, Title } from './SortTag.style';
import { SortProps } from '../../../pages/DeliveryPage/DeliveryPage';

interface SortTagProps {
  sortList: SortProps[];
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortTag = ({ sortList, setIsClicked }: SortTagProps) => {
  const { carouselItemsRef, isDragging, isMobile, startPosition } = useDrag({
    items: sortList,
    itemWidth: itemWidthObj.sortTag,
    itemGap: itemGapObj.sortTag,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startPosition === e.clientX) {
      const id = Number(e.currentTarget.dataset.id);
      id === 0 ? setIsClicked(true) : alert(`${sortList[id].title}으로 정렬`);
    }
  };

  return (
    <DragCarousel isMobile={isMobile} carouselItemsRef={carouselItemsRef} isDragging={isDragging}>
      <div css={Wrapper(itemGapObj.sortTag)}>
        {sortList.map((item, index) => (
          <div key={index}>
            <button css={Button(itemWidthObj.sortTag)} data-id={index} onClick={handleClick}>
              <span css={Title}>{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </DragCarousel>
  );
};

export default SortTag;
