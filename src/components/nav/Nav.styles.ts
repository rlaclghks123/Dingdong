import { css } from '@emotion/react';
import theme from '../../styles/theme';
import commonStyle from '../../styles/common';

export const Wrapper = css`
  position: fixed;
  bottom: 0px;

  padding: 16px 0px;
  border-radius: 16px 16px 0px 0px;
  border: 1px solid ${theme.grey200};

  width: ${commonStyle.width};
  background-color: ${theme.grey100};
`;

export const Ul = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Li = css`
  width: 100%;
  color: ${theme.grey700};
`;

export const LinkStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = css`
  width: 24px;
  height: 24px;
  object-fit: cover;
  margin-bottom: 4px;
`;

export const Content = css`
  font-size: 10px;
`;
