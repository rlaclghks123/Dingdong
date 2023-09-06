import { css } from '@emotion/react';
import theme from '../../../styles/theme';

interface IMG_VARIANTS_INTERFACE {
  [key: string]: {
    imgMinWidth?: string;
    imgWidth?: string;
    imgHeight?: string;
    imgBorderRadius?: string;
  };
}

interface ITEM_BOX_VARIANTS_INTERFACE {
  [key: string]: {
    flexDirection?: string;
    borderBottom?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
}

const IMG_VARIANTS: IMG_VARIANTS_INTERFACE = {
  SMALL: {},

  MEDIUM: {
    imgMinWidth: '80px',
    imgWidth: '130px',
    imgHeight: '80px',
    imgBorderRadius: `16px`,
  },

  LARGE: {
    imgMinWidth: 'inherit',
    imgWidth: 'inherit',
    imgHeight: '120px',
    imgBorderRadius: `16px`,
  },
};

const ITEM_BOX_VARIANTS: ITEM_BOX_VARIANTS_INTERFACE = {
  SMALL: {},

  MEDIUM: {
    flexDirection: 'row',
  },

  LARGE: {
    flexDirection: 'column',
  },
};

const ItemBoxDefault = (itemWidth: number) => css`
  display: flex;
  width: ${`${itemWidth}px`};
  margin: 8px 0px;
  gap: 16px;
  cursor: pointer;
`;

export const ItemBox = (itemWidth: number, size: string) => css`
  ${ItemBoxDefault(itemWidth)}
  flex-direction: ${ITEM_BOX_VARIANTS[size].flexDirection};
`;

export const Img = (size: string) => css`
  border-radius: 16px;
  min-width: ${IMG_VARIANTS[size].imgMinWidth};
  width: ${IMG_VARIANTS[size].imgWidth};
  height: ${IMG_VARIANTS[size].imgHeight};
  background-color: ${theme.grey200};
`;

export const DescriptionBox = (size: string) => css`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: inherit;
  font-size: 14px;
  overflow: hidden;

  span {
    margin: 2px 0px;
    ${size === 'LARGE' &&
    `
        &:first-of-type {order: 3}
        &:nth-of-type(2) {order: 1}
        &:nth-of-type(3) {order: 2}
      `}
  }
`;

export const Rank = css`
  color: ${theme.blue700};
`;

export const MenuTitle = css`
  color: ${theme.grey600};
`;

export const Price = css`
  font-weight: 700;
`;

export const Point = css`
  color: ${theme.green400};
  font-size: 8px;
`;
