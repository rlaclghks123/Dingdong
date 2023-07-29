import React from 'react';
import { Item } from '../../../pages/MainPage/HomePage';
import { Wrapper, ItemBox, ItemContents, ItemStoreName, Img, ItemStoreNameTitle, StarStyle } from './ProductCard.style';

interface ProductCardProps {
  items: Item[];
  itemWidth: number;
  itemGap?: number;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductCard = ({ items, itemWidth, itemGap = 0, handleClick }: ProductCardProps) => {
  return (
    <Wrapper itemGap={itemGap}>
      {items.map((item, index) => (
        <ItemBox width={itemWidth} key={index} onClick={handleClick} data-id={index}>
          <Img src={item.img} alt={`${item.title} 사진`} width={itemWidth} />
          <ItemContents width={itemWidth}>
            <div css={ItemStoreName}>
              <div css={ItemStoreNameTitle}>{item.title}</div>
              <div>
                <span>
                  <svg css={StarStyle} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </span>
                <span>{`${item.star}점`}</span>
              </div>
            </div>
            <div>배달 : {item.deliveryTime}</div>
            <div>배달팁 : {`${item?.deliveryTip?.toLocaleString()}원`}</div>
          </ItemContents>
        </ItemBox>
      ))}
    </Wrapper>
  );
};

export default ProductCard;