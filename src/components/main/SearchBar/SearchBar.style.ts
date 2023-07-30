import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';

export const Wrapper = css`
  position: relative;
  margin: ${commonStyle.boxSideMargin};
`;

export const Input = css`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
`;

export const Button = css`
  position: absolute;
  right: 24px;
  top: 50%;
  bottom: 50%;
`;
