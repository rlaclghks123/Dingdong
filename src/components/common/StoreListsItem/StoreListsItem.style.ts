import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import { storeListSizes } from '../../main/StoreLists/StoreLists';

export const ItemBox = (itemWidth: number, size: string) => css`
  display: flex;
  flex-direction: ${size === storeListSizes.small ? 'row' : 'column'};
  border-radius: ${size !== storeListSizes.small && '16px'};
  cursor: pointer;
  width: ${itemWidth && `${itemWidth}px`};
  box-shadow: ${size === storeListSizes.large && `0px 3px 5px 0px ${theme.grey400}`};
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: ${size === storeListSizes.small && '1px solid rgba(0,0,0,0.1)'};
`;

export const Img = (size: string) => css`
  min-width: ${size === storeListSizes.small ? `80px` : 'inherit'};
  width: ${size === storeListSizes.small ? `80px` : '100%'};
  height: ${size === storeListSizes.small ? `80px` : '120px'};
  border-radius: ${size === storeListSizes.large ? `16px 16px 0px 0px` : '16px'};
`;

export const ItemContents = (size: string) => css`
  display: flex;
  flex-direction: column;
  width: inherit;
  padding: ${size === storeListSizes.large && '0px 16px'};
  font-size: 14px;

  span {
    margin: 4px 0px;
  }
`;

export const ItemContentsStoreName = css`
  display: flex;
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
  flex-direction: ${size === storeListSizes.medium ? 'column' : 'row'};
  text-align: left;
  gap: ${size !== storeListSizes.medium && '8px'};
`;
