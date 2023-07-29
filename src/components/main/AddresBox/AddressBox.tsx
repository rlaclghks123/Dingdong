import { css } from '@emotion/react';
import theme from '../../../styles/theme';

const Wrapper = css`
  background-color: ${theme.grey100};
  padding: 0px 16px 16px 16px;
`;

const AddressBox = () => {
  return <div css={Wrapper}>우리집</div>;
};

export default AddressBox;
