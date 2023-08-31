import theme from '../../../styles/theme';
import { css } from '@emotion/react';

export const Wrapper = css`
  display: flex;
  align-items: center;
  height: inherit;
  backdrop-filter: blur(8px);
  padding: 0px 16px;
`;

export const Box = css`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  &:last-child {
    justify-content: flex-end;
  }
`;

export const Span = css`
  &:last-child {
    margin-left: 8px;
  }
`;

export const Button = css``;

export const LeftBoxWithBtnStyle = css`
  display: flex;
  align-items: center;
  margin-left: -16px;

  img {
    margin-top: -3px;
  }
`;

export const H1 = css`
  font-size: 24px;
  font-weight: 800;
  color: ${theme.grey700};
`;

export const Icon = css`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
