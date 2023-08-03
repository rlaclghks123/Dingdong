import { css } from '@emotion/react';

export const DragItemWrapper = css`
  display: flex;
  position: relative;
`;

export const Img = (width: number) => css`
  width: ${width ? `${width}px` : '360px'};
  height: 150px;
`;

export const TitleBox = css`
  position: absolute;
  width: 100%;
  height: 100%;

  padding: 16px;

  text-align: left;

  color: white;
`;
