import { css } from '@emotion/react';
import commonStyle from '../../styles/common';

export const ModalDarkBgWrapper = css`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;

  background-color: black;
  opacity: 0.7;
  z-index: 999;
`;

export const ModalContentsBox = css`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 50%;
  right: 50%;
  bottom: 0px;
  transform: translate(-50%, 0%);
  z-index: 9999;

  width: ${commonStyle.maxWidth};
  height: 70%;

  background-color: white;
  border-radius: 8px;
`;

export const ModalTitle = css`
  text-align: center;
  padding: ${commonStyle.boxFullPadding};
`;

export const ModalUl = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 90%;
  padding: ${commonStyle.boxFullPadding};
`;

export const CloseBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10%;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
