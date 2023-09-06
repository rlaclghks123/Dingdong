import { css } from '@emotion/react';
import theme from '../../../styles/theme';

interface ITEM_BOX_VARIANTS_INTERFACE {
  [key: string]: {
    flexDirection?: string;
    borderBottom?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
}

interface IMG_VARIANTS_INTERFACE {
  [key: string]: {
    imgMinWidth?: string;
    imgWidth?: string;
    imgHeight?: string;
    imgBorderRadius?: string;
  };
}

interface DESCRIPTION_BOX_VARIANTS_INTERFACE {
  [key: string]: {
    padding: string;
  };
}

interface DESCRIPTION_TITLE_VARIANTS_INTERFACE {
  [key: string]: {
    flexDirection: string;
  };
}

interface DESCRIPTION_DELIVERY_BOX_VARIANTS_INTERFACE {
  [key: string]: {
    flexDirection: string;
    gap: string;
  };
}

const ITEM_BOX_VARIANTS: ITEM_BOX_VARIANTS_INTERFACE = {
  SMALL: {
    flexDirection: 'row',
    borderRadius: '0px',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    boxShadow: '',
  },

  MEDIUM: {
    flexDirection: 'column',
    borderRadius: '16px',
    borderBottom: '',
    boxShadow: '',
  },

  LARGE: {
    flexDirection: 'column',
    borderRadius: '16px',
    borderBottom: '',
    boxShadow: `0px 3px 5px 0px ${theme.grey400}`,
  },
};

const IMG_VARIANTS: IMG_VARIANTS_INTERFACE = {
  SMALL: {
    imgMinWidth: '80px',
    imgWidth: '80px',
    imgHeight: '80px',
    imgBorderRadius: `16px`,
  },

  MEDIUM: {
    imgMinWidth: 'inherit',
    imgWidth: 'inherit',
    imgHeight: '120px',
    imgBorderRadius: `16px`,
  },

  LARGE: {
    imgMinWidth: 'inherit',
    imgWidth: 'inherit',
    imgHeight: '120px',
    imgBorderRadius: `16px 16px 0px 0px`,
  },
};

const DESCRIPTION_BOX_VARIANTS: DESCRIPTION_BOX_VARIANTS_INTERFACE = {
  SMALL: {
    padding: '0px',
  },

  MEDIUM: {
    padding: '0px',
  },

  LARGE: {
    padding: '0px 16px',
  },
};

const DESCRIPTION_TITLE_BOX_VARIANTS: DESCRIPTION_TITLE_VARIANTS_INTERFACE = {
  SMALL: {
    flexDirection: 'column',
  },

  MEDIUM: {
    flexDirection: 'row',
  },

  LARGE: {
    flexDirection: 'row',
  },
};

const DESCRIPTION_DELIVERY_BOX_VARIANTS: DESCRIPTION_DELIVERY_BOX_VARIANTS_INTERFACE = {
  SMALL: {
    flexDirection: 'row',
    gap: '8px',
  },

  MEDIUM: {
    flexDirection: 'column',
    gap: '4px',
  },

  LARGE: {
    flexDirection: 'row',
    gap: '8px',
  },
};

const ItemBoxDefault = (itemWidth: number) => css`
  display: flex;
  width: ${`${itemWidth}px`};
  padding-bottom: 16px;
  gap: 8px;
  cursor: pointer;
`;

export const ItemBox = (itemWidth: number, size: string) => css`
  ${ItemBoxDefault(itemWidth)}
  flex-direction: ${ITEM_BOX_VARIANTS[size].flexDirection};
  border-radius: ${ITEM_BOX_VARIANTS[size].borderRadius};
  border-bottom: ${ITEM_BOX_VARIANTS[size].borderBottom};
  box-shadow: ${ITEM_BOX_VARIANTS[size].boxShadow};
`;

export const Img = (size: string) => css`
  min-width: ${IMG_VARIANTS[size].imgMinWidth};
  width: ${IMG_VARIANTS[size].imgWidth};
  height: ${IMG_VARIANTS[size].imgHeight};
  border-radius: ${IMG_VARIANTS[size].imgBorderRadius};
  background-color: ${theme.grey200};
`;

const DescriptionBoxDefault = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: inherit;
  font-size: 14px;
`;

export const DescriptionBox = (size: string) => css`
  ${DescriptionBoxDefault};
  padding: ${DESCRIPTION_BOX_VARIANTS[size].padding};
`;

const DescriptionTitleBoxDefault = css`
  display: flex;
  margin: 4px 0px;
  flex-direction: row;
`;

export const DescriptionTitleBox = (size: string) => css`
  ${DescriptionTitleBoxDefault};
  flex-direction: ${DESCRIPTION_TITLE_BOX_VARIANTS[size].flexDirection};
`;

export const DescriptionTitle = css`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 800;
  padding-right: 8px;
`;

export const StarStyle = css`
  font-size: 12px;
  margin-right: 4px;
  fill: ${theme.yellow300};
`;

const DescriptionDeliveryBoxDefault = css`
  display: flex;
  text-align: left;
  flex-direction: row;
  gap: 8px;
`;

export const DescriptionDeliveryBox = (size: string) => css`
  ${DescriptionDeliveryBoxDefault};
  flex-direction: ${DESCRIPTION_DELIVERY_BOX_VARIANTS[size].flexDirection};
  gap: ${DESCRIPTION_DELIVERY_BOX_VARIANTS[size].gap};
`;
