import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';

export const GRID_LENGTH = 5;

export const Wrapper = css`
  display: grid;
  grid-template-columns: repeat(${GRID_LENGTH}, 1fr);

  padding: ${commonStyle.boxSidePadding};

  background-color: white;
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
