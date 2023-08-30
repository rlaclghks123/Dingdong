import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const Wrapper = css`
  padding: 8px;
  margin: 16px;

  background-color: ${theme.white};
`;

export const DragDirectionBox = (itemGap: number) => css`
  display: flex;
  gap: ${itemGap | 0}px;
`;
