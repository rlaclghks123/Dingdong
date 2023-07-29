import { css } from '@emotion/react';
import theme from '../../../styles/theme';
import styled from '@emotion/styled';

interface ItemBoxProps {
  width?: number;
}

interface WrapperProps {
  itemGap: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
`;

export const ItemBox = styled.button<ItemBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : '150px')};
`;

export const Img = styled.img`
  border-radius: 16px;
  width: ${({ width }) => (width ? `${width}px` : '150px')};
  height: 100px;
`;

export const ItemContents = styled.div<ItemBoxProps>`
  text-align: left;
  padding: 8px 0px;
  width: ${({ width }) => (width ? `${width}px` : '150px')};

  div {
    margin: 8px 0px;
  }
`;

export const ItemStoreName = css`
  display: flex;
  align-items: center;
`;

export const ItemStoreNameTitle = css`
  display: flex;
  align-items: center;

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StarStyle = css`
  font-size: 12px;
  margin-right: 2px;
  fill: ${theme.yellow300};
`;
