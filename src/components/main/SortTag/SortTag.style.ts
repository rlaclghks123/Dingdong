import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const Wrapper = styled.div<{ itemGap: number }>`
  display: flex;
  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
`;

export const Button = styled.button<{ width: number }>`
  border-radius: 8px;
  width: ${({ width }) => (width ? `${width}px` : '120px')};
`;

export const Title = css`
  font-size: 16px;
  padding: 8px;
  border-radius: 16px;
  background-color: ${theme.grey100};
`;
