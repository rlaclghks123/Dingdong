import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const DragContainer = (isMobile: boolean) => css`
  overflow: hidden;
  position: relative;

  ${isMobile &&
  `
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
  `}
`;

export const SlideIndicatorBox = css`
  position: absolute;
  bottom: 8px;
  right: 8px;

  border-radius: 16px;
  padding: 4px 16px;

  background-color: rgba(0, 0, 0, 0.4);
  color: ${theme.grey100};

  font-size: 8px;
`;

export const DragRefBox = (isDragging: boolean) => css`
  ${!isDragging && ` transition: transform 0.5s ease-in-out;`}
`;
