import theme from '../../../styles/theme';
import { css } from '@emotion/react';

export const Wrapper = css`
  display: flex;
  align-items: center;
  width: 100%;
  backdrop-filter: blur(8px);
  padding: 16px 0px;
`;

export const Box = css`
  display: flex;
  align-items: center;

  margin: 0px 8px;

  width: 100%;
  height: 100%;

  &:last-child {
    justify-content: flex-end;
  }
`;

export const Layout = css`
  position: relative;
  text-decoration: none;
  display: flex;

  svg {
    font-size: 24px;
    fill: ${theme.grey400};
  }

  h1 {
    font-size: 24px;
    font-weight: 800;
    color: ${theme.grey400};
  }

  span {
    margin: 0px 8px;
  }
`;
