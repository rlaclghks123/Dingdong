/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';

export const Wrapper = css`
  position: relative;
  display: flex;
  justify-content: center;

  height: 10%;
  margin: ${commonStyle.boxSideMargin};

  box-sizing: border-box;
`;

export const Input = css`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: none;
  outline: none;
`;

export const Button = css`
  position: absolute;
  right: 24px;
  top: 18px;
  border: none;
  background-color: inherit;
`;
