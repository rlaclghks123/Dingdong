import { css } from '@emotion/react';
import commonStyle from '../../../styles/common';

const Wrapper = css`
  padding: ${commonStyle.boxSidePadding};
`;

const AddressBox = () => {
  return <div css={Wrapper}>우리집</div>;
};

export default AddressBox;
