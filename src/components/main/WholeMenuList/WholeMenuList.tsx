import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import MenuListItem from '../../common/MenuListItem/MenuListItem';
import { CreateShopListDataResponse, createStoresDataResponse } from '../../../mocks/data/dingdongWorld';
// import useGetShopList from '../../../hooks/useGetShopList';

const Section = css`
  margin-top: 16px;
  width: 360px;
  min-width: 360px;
`;

const Header = css`
  font-weight: 800;
  font-size: 24px;
  margin-top: 1px solid rgba(0, 0, 0, 1);
`;

const MenuListBox = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const MunuListSize = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE',
};

const WholeMenuList = () => {
  // const { data } = useGetShopList();

  const [data, setData] = useState<CreateShopListDataResponse[]>();

  const useGetShopList = async () => {
    setData(createStoresDataResponse());
  };

  useEffect(() => {
    useGetShopList();
  }, []);

  return (
    <section css={Section}>
      <div css={Header}>전체 상품</div>
      <div css={MenuListBox}>{data && <MenuListItem items={data} itemWidth={172} size={MunuListSize.large} />}</div>
    </section>
  );
};
export default WholeMenuList;
