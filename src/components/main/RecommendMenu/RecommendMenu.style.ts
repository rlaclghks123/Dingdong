import { css } from '@emotion/react';
import styled from '@emotion/styled';
import commonStyle from '../../../styles/common';

interface ButtonProps {
  width: number;
  url: string;
}

export const Wrapper = styled.div<{ itemGap: number }>`
  display: flex;

  padding: ${commonStyle.boxSidePadding};
  margin: ${commonStyle.boxUpAndDownMargin};

  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
`;

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : '120px')};
  height: 100px;

  background-image: url(${props => props.url});
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
