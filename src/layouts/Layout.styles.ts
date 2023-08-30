import { css } from '@emotion/react';
import commonStyle from '../styles/common';

export const Wrapper = css`
  display: flex;
  justify-content: center;
`;

export const LayoutBox = css`
  width: 100%;
  max-width: ${commonStyle.width};
  margin-bottom: 60px;
`;

export const Header = css`
  position: fixed;
  top: 0px;
  width: ${commonStyle.width};
  height: 65px;
  z-index: 99;
`;

export const Main = css`
  margin-top: 65px;
`;
