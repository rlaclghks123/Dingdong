import { css } from '@emotion/react';
import commonStyle from '../styles/common';
import theme from '../styles/theme';

export const Wrapper = css`
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const LayoutBox = css`
  max-width: ${commonStyle.maxWidth};
  width: 100%;
`;

export const Header = css`
  position: fixed;
  width: ${commonStyle.maxWidth};
  top: 0px;
  z-index: 9999;
  box-sizing: border-box;
`;

export const Main = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60px;
  padding-top: 8px;
  box-sizing: border-box;
`;

export const Nav = css`
  position: fixed;
  bottom: 0px;

  width: 360px;
  height: 70px;
  padding: ${commonStyle.boxUpAndDownPadding};
  border-radius: 16px 16px 0px 0px;
  border: 1px solid ${theme.grey200};
  background-color: ${theme.grey100};
`;
