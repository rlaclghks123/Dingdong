import { css } from '@emotion/react';
import theme from '../../../styles/theme';

interface CSSObject {
  [key: string]: {
    flexDirection: string;
    borderBottom?: string;
    imgMinWidth: string;
    imgWidth: string;
    imgHeight: string;
    imgBorderRadius: string;
    ItemContentsStoreNameFlexDirection: string;
    itemContentsDeliveryBoxFlexDirection: string;
    itemContentsDeliveryBoxGap?: string;
    borderRadius?: string;
    boxShadow?: string;
    itemContentsPadding?: string;
  };
}

const CSS: CSSObject = {
  SMALL: {
    flexDirection: 'row',
    borderBottom: '1px solid rgba(0,0,0,0.1)',

    imgMinWidth: '80px',
    imgWidth: '80px',
    imgHeight: '80px',
    imgBorderRadius: `16px`,

    ItemContentsStoreNameFlexDirection: 'column',

    itemContentsDeliveryBoxFlexDirection: 'row',
    itemContentsDeliveryBoxGap: '8px',
  },
  MEDIUM: {
    flexDirection: 'column',
    borderRadius: '16px',

    imgMinWidth: 'inherit',
    imgWidth: '100%',
    imgHeight: '120px',
    imgBorderRadius: `16px`,

    ItemContentsStoreNameFlexDirection: 'row',

    itemContentsDeliveryBoxFlexDirection: 'column',
  },
  LARGE: {
    flexDirection: 'column',
    borderRadius: '16px',
    boxShadow: `0px 3px 5px 0px ${theme.grey400}`,

    imgMinWidth: 'inherit',
    imgWidth: '100%',
    imgHeight: '120px',
    imgBorderRadius: `16px 16px 0px 0px`,

    ItemContentsStoreNameFlexDirection: 'row',
    itemContentsPadding: '0px 16px',
    itemContentsDeliveryBoxFlexDirection: 'row',
    itemContentsDeliveryBoxGap: '8px',
  },
};

export const ItemBox = (itemWidth: number, size: string) => css`
  display: flex;
  flex-direction: ${CSS[size].flexDirection};
  border-radius: ${CSS[size].borderRadius};
  border-bottom: ${CSS[size].borderBottom};
  width: ${itemWidth && `${itemWidth}px`};
  box-shadow: ${CSS[size].boxShadow};
  gap: 8px;
  padding-bottom: 16px;
  cursor: pointer;
`;

export const Img = (size: string) => css`
  min-width: ${CSS[size].imgMinWidth};
  width: ${CSS[size].imgWidth};
  height: ${CSS[size].imgHeight};
  border-radius: ${CSS[size].imgBorderRadius};
`;

export const ItemContents = (size: string) => css`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: inherit;
  padding: ${CSS[size].itemContentsPadding};
  font-size: 14px;

  span {
    margin: 4px 0px;
  }
`;

export const ItemContentsStoreName = (size: string) => css`
  display: flex;
  flex-direction: ${CSS[size].ItemContentsStoreNameFlexDirection};
`;

export const ItemContentsStoreNameTitle = css`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 800;
  padding-right: 8px;
`;

export const StarStyle = css`
  font-size: 12px;
  fill: ${theme.yellow300};
  margin-right: 4px;
`;

export const ItemContentsDeliveryBox = (size: string) => css`
  display: flex;
  flex-direction: ${CSS[size].itemContentsDeliveryBoxFlexDirection};
  text-align: left;
  gap: ${CSS[size].itemContentsDeliveryBoxGap};
`;
