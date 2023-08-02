import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import styled from '@emotion/styled';
import { storeListSizes } from '../../main/StoreLists/StoreLists';

interface StoreListsItemProps {
  width?: number;
  size?: string;
}

export const ItemBox = styled.button<StoreListsItemProps>`
  display: flex;
  flex-direction: column;

  border-radius: 16px;
  width: ${({ width }) => (width ? `${width}px` : '150px')};
  box-shadow: ${({ size }) => size === storeListSizes.large && `0px 3px 5px 0px ${theme.grey400}}`};
  cursor: pointer;
`;

export const Img = styled.img<StoreListsItemProps>`
  width: inherit;
  border-radius: ${({ size }) => (size === storeListSizes.large ? '16px 16px 0px 0px' : '16px')};
  height: 120px;
`;

export const ItemContents = styled.div<StoreListsItemProps>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => (width ? `${width}px` : '150px')};
  padding: ${({ size }) => size === storeListSizes.large && '0px 16px'};
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

export const ItemContentsDeliveryBox = styled.div<StoreListsItemProps>`
  display: flex;
  flex-direction: ${({ size }) => (size === storeListSizes.large ? 'row' : 'column')};
  text-align: left;

  span {
    margin-right: ${({ size }) => size === storeListSizes.large && '8px'};
  }
`;
