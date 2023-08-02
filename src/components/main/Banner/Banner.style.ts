import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DragItemWrapper = css`
  display: flex;
  position: relative;
`;

export const Img = styled.img<{ width: number }>`
  width: ${({ width }) => (width ? `${width}px` : '360px')};
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
