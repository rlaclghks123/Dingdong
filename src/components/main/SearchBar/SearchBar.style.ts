import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';
import theme from '../../../styles/theme';

export const Wrapper = css`
  margin: ${commonStyle.boxSideMargin};
`;

export const Input = css`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
`;

export const DropDownBox = css`
  margin: -10px auto;
  padding-top: 10px;
  background-color: white;
  height: 100px;
`;

export const DropDownItem = css`
  padding: 0 16px;

  &.selected {
    cursor: pointer;
    background-color: ${theme.grey200};
  }
`;
