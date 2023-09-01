import { css } from '@emotion/react';
import MenuListItem from '../../common/MenuListItem/MenuListItem';
import useGetShopList from '../../../hooks/useGetShopList';

const Header = css`
  font-weight: 800;
  font-size: 24px;
`;

const MunuListSize = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE',
};

const PopularMenuList = () => {
  const { data, isLoading, isError } = useGetShopList();
  return (
    <section>
      <div css={Header}>{`인기 상품`}</div>
      <MenuListItem items={data?.slice(0, 5)} itemWidth={360} size={MunuListSize.medium} />
    </section>
  );
};
export default PopularMenuList;
