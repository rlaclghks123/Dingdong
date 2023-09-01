import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const Wrapper = (itemGap: number) => css`
  display: flex;
  gap: ${itemGap ? `${itemGap}px` : '0px'};
  margin-top: 8px;
`;

export const Button = (width: number) => css`
  border-radius: 8px;
  width: ${width ? `${width}px` : '120px'};
`;

export const Title = css`
  font-size: 16px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${theme.grey100};
`;
