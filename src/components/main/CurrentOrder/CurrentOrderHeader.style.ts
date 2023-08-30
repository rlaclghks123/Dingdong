import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const Wrapper = css`
  padding: 8px;
  margin: 16px;

  background-color: ${theme.white};
`;

export const Header = css`
  display: flex;
  align-items: center;
  margin: 8px 0px;
  width: 100%;
`;

export const HeaderLeftBox = css`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const H2 = css`
  font-size: 18px;
  font-weight: 700;
`;

export const HeaderRightBox = css`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: end;

  a {
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 8px;
  }
`;

export const TooltipBox = css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2px;
  margin-left: 8px;

  width: 12px;
  height: 12px;

  font-size: 8px;

  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 1);
`;
