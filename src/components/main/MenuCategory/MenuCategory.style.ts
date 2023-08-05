import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const GRID_LENGTH = 5;

export const Wrapper = css`
  padding: 0px 16px 16px 16px;
  background-color: white;
`;

export const MenuCategoryBox = css`
  display: grid;
  grid-template-columns: repeat(${GRID_LENGTH}, 1fr);
  padding: 16px 8px;
  background-color: ${theme.grey100};
  border-radius: 16px;
`;

export const MenuItemBox = css`
  padding: 8px;

  svg {
    fill: orangered;
  }
`;

export const LinkBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Name = css`
  font-size: 8px;
`;

export const EmptyItems = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const Dot = css`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: black;
`;
