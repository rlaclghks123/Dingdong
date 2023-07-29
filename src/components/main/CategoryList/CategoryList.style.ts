import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';

export const Wrapper = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: ${commonStyle.boxFullMargin};

  a {
    text-decoration: none;
    color: black;
  }
`;
