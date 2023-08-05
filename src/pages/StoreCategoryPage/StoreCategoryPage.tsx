import { useState } from 'react';
import { css } from '@emotion/react';

import Layout from '../../layouts/Layout';
import { headerLeftData, headerRightData, sortList } from '../DeliveryPage/DeliveryPage';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import SortTag from '../../components/main/SortTag/SortTag';
import SortModal from '../../components/Modal/SortModal';
import StoreLists, { storeListSizes } from '../../components/main/StoreLists/StoreLists';

export const Wrapper = (isClicked: boolean) => css`
  ${isClicked &&
  `
      position: fixed;
      left: 0px;
      right: 0px;
      transform: translate(50% 0%);
 `}
`;

const StoreCategory = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div css={Wrapper(isClicked)}>
        <Layout>
          <MainHeader leftItem={headerLeftData} rightItem={headerRightData} />
          <div>
            <SortTag setIsClicked={setIsClicked} />
            <StoreLists size={storeListSizes.small} />
          </div>
        </Layout>
        {isClicked && <SortModal sortList={sortList} setIsClicked={setIsClicked} />}
      </div>
    </>
  );
};

export default StoreCategory;
