import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';

import Layout from '../../layouts/Layout';
import { headerLeftData, headerRightData, sortList } from '../DeliveryPage/DeliveryPage';
import MainHeader from '../../components/header/MainHeader/MainHeader';
import Nav from '../../components/nav/Nav';
import SortTag from '../../components/main/SortTag/SortTag';
import SortModal from '../../components/Modal/SortModal';

export const Wrapper = (isClicked: boolean) => css`
  background-color: white;
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
          </div>
          <Nav />
        </Layout>
        {isClicked && <SortModal sortList={sortList} setIsClicked={setIsClicked} />}
      </div>
    </>
  );
};

export default StoreCategory;
