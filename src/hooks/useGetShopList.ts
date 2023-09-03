import { useQuery } from 'react-query';
import { shopList } from '../api/shopList';

const SHOP_LIST_KEY = 'shotList';

const useGetShopList = () => useQuery(SHOP_LIST_KEY, shopList);

export default useGetShopList;
