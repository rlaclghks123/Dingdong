import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const Wrapper = css`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 16px;
  background-color: white;
`;

export const Title = css`
  font-size: 32px;
  font-weight: 800;
  margin: 8px 0px;
`;

export const Contents = css`
  line-height: 24px;
  font-size: 16px;
  color: ${theme.grey700};
`;
