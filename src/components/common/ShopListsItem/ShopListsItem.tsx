import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ItemBox,
  Img,
  DescriptionBox,
  DescriptionTitleBox,
  DescriptionTitle,
  StarStyle,
  DescriptionDeliveryBox,
} from './ShopListsItem.style';
import { CreateShopListDataResponse } from '../../../mocks/data/dingdongWorld';

interface Props {
  items: CreateShopListDataResponse[];
  itemWidth: number;
  size: string;
  imgWidth?: number | string;
  carouselItemsRef?: React.RefObject<HTMLDivElement>;
  startPosition?: number;
}

const ShopListsItem = ({ items, itemWidth, size, carouselItemsRef, startPosition }: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = Number(e.currentTarget.dataset.id);
    if (carouselItemsRef && startPosition !== e.clientX) return;
    navigate(`/brands/${items[itemId].info.title}`);
  };

  return (
    <>
      {items?.map((item, index) => (
        <button css={ItemBox(itemWidth, size)} key={item.uid} onClick={handleClick} data-id={index}>
          <img css={Img(size)} src={item.info.image} alt={`${item.info.name} 사진`} />

          <div css={DescriptionBox(size)}>
            <div css={DescriptionTitleBox(size)}>
              <span css={DescriptionTitle}>{item.info.title}</span>
              <span>
                <svg css={StarStyle} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                {`${item.info.rate}점`}
              </span>
            </div>

            <div>
              <div css={DescriptionDeliveryBox(size)}>
                <span>배달 : {item.info.deliveryTime}</span>
                <span>배달팁 : {`${item.info.deliveryFee?.toLocaleString()}원`}</span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </>
  );
};

export default ShopListsItem;
