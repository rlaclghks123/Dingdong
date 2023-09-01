import { useNavigate } from 'react-router-dom';
import { CreateShopListDataResponse } from '../../../mocks/data/dingdongWorld';
import { ItemBox, Img, DescriptionBox, Rank, MenuTitle, Price, Point } from './MenuListItem.style';

interface Props {
  items: CreateShopListDataResponse[];
  itemWidth: number;
  size?: string;
  imgWidth?: number | string;
  carouselItemsRef?: React.RefObject<HTMLDivElement>;
  startPosition?: number;
}

const MenuListItem = ({ items, itemWidth, size = 'MEDIUM', carouselItemsRef, startPosition }: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = Number(e.currentTarget.dataset.id);
    if (carouselItemsRef && startPosition !== e.clientX) return;
    navigate(items[itemId].uid || '');
  };

  return (
    <>
      {items?.map((item, index) => (
        <button css={ItemBox(itemWidth, size)} key={index} onClick={handleClick} data-id={index}>
          <img css={Img(size)} src={item?.info?.detail?.img} alt={`${item?.info?.detail?.title} 사진`} />
          <div css={DescriptionBox(size)}>
            {size === 'MEDIUM' && <span css={Rank}>{`${index + 1} 위`}</span>}
            <span css={MenuTitle}>{item?.info?.detail?.title}</span>
            <span css={Price}>{`${item?.info?.detail?.price.toLocaleString()}원`}</span>
            <span css={Point}>{`${item?.info?.detail?.point}원 적립`}</span>
          </div>
        </button>
      ))}
    </>
  );
};

export default MenuListItem;
