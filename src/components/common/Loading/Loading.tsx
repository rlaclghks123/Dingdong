import { css, keyframes } from '@emotion/react';
import React from 'react';
import theme from '../../../styles/theme';

interface LoadingProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

const spinEffect = keyframes`
  from {
    transform: rotate(0deg);
 }
  to { 
    transform: rotate(360deg); }
`;

const Wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = css`
  fill: ${theme.blue700};
  animation: ${spinEffect} 1.5s linear infinite;
  margin-right: 8px;
`;

const Loading = ({ elementRef }: LoadingProps) => {
  return (
    <div css={Wrapper} ref={elementRef}>
      <svg css={Svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </svg>
      <span>로딩중...</span>
    </div>
  );
};

export default Loading;
