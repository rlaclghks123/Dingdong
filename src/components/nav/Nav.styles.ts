import { css } from '@emotion/react';
import theme from '../../styles/theme';
import commonStyle from '../../styles/common';

export const Wrapper = css`
  position: fixed;
  bottom: 0px;

  width: 360px;
  padding: ${commonStyle.boxUpAndDownPadding};
  border-radius: 16px 16px 0px 0px;
  border: 1px solid ${theme.grey200};
  background-color: ${theme.grey100};
`;

export const UlBox = css`
  background-color: ${theme.grey100};
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
`;

export const Item = css`
  width: 100%;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    text-decoration: none;
    color: ${theme.grey500};
  }
`;

export const Icon = css`
  svg {
    fill: ${theme.grey400};
  }
`;

export const Content = css`
  font-size: 10px;
`;
