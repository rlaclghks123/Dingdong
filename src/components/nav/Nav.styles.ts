import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const Wrapper = css`
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
