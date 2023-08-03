import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';

export const Wrapper = (itemGap: number) => css`
  display: flex;

  padding: ${commonStyle.boxSidePadding};
  margin: ${commonStyle.boxUpAndDownMargin};

  gap: ${itemGap ? `${itemGap}px` : '0px'};
`;

export const Button = (url: string, width: number) => css`
  width: ${width ? `${width}px` : '120px'};
  height: 100px;

  background-image: ${url && `url(${url})`};
  background-size: 100% 100%;

  border-radius: 16px;
`;

export const TitleBox = css`
  height: 100%;
  width: 100%;
  padding: 16px 8px;
  text-align: start;
  color: white;
  font-size: 12px;
`;
