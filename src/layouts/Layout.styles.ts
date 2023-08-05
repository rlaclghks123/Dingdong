import { css } from '@emotion/react';
import commonStyle from '../styles/common';

export const Wrapper = css`
  display: flex;
  justify-content: center;
`;

export const LayoutBox = css`
  width: 100%;
  max-width: ${commonStyle.maxWidth};
  margin-bottom: 60px;
`;

export const Header = css`
  position: fixed;
  top: 0px;
  width: ${commonStyle.maxWidth};
  z-index: 9999;
`;

export const Main = css`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
`;
