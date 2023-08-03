import { css } from '@emotion/react';

import commonStyle from '../../styles/common';

export const Wrapper = (isClicked: boolean) => css`
  ${isClicked &&
  `
      position: fixed;
      left: 0px;
      right: 0px;
      transform: translate(50% 0%);
 `}
`;

export const WhiteBox = css`
  background-color: white;
`;

export const SortContainer = css`
  background-color: white;
  margin-top: 16px;
  padding: ${commonStyle.boxUpAndDownPadding};
`;
