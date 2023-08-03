import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import { storeListSizes } from '../../main/StoreLists/StoreLists';

export const ItemBox = (itemWidth: number, size: string) => css`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  cursor: pointer;
  width: ${itemWidth ? `${itemWidth}px` : '150px'};
  box-shadow: ${size === storeListSizes.large && `0px 3px 5px 0px ${theme.grey400}`};
`;

export const Img = (size: string) => css`
  width: inherit;
  border-radius: ${size === storeListSizes.large ? `16px 16px 0px 0px` : '16px'};
  height: 120px;
`;

export const ItemContents = (size: string) => css`
  display: flex;
  flex-direction: column;
  width: inherit;
  padding: ${size === storeListSizes.large && '0px 16px'};
  margin-top: 8px;
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
  flex-direction: ${size === storeListSizes.large ? 'row' : 'column'};
  text-align: left;

  span {
    margin-right: ${size === storeListSizes.large && '8px'};
  }
`;
