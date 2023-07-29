import { flexBoxRow } from '../../../styles/mixins';
import theme from '../../../styles/theme';
import commonStyle from '../../../styles/common';
import { css } from '@emotion/react';

export const Wrapper = css`
  padding: 16px 8px;

  background-color: ${theme.white};
  margin: ${commonStyle.boxSideMargin};
`;

export const Header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;

  a {
    color: black;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;

    strong {
      font-size: 24px;
      font-weight: 700;
    }

    span {
      margin-right: 4px;
    }
  }
`;

export const TooltipBox = css`
  ${flexBoxRow};
  padding: 2px;

  width: 12px;
  height: 12px;

  font-size: 8px;

  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 1);

  background-color: ${theme.white};
`;
