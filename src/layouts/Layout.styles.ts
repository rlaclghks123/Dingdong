import { css } from '@emotion/react';
import commonStyle from '../styles/common';
import theme from '../styles/theme';

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

export const Nav = css`
  position: fixed;
  bottom: 0px;

  width: 360px;
  padding: ${commonStyle.boxUpAndDownPadding};
  border-radius: 16px 16px 0px 0px;
  border: 1px solid ${theme.grey200};
  background-color: ${theme.grey100};
`;
