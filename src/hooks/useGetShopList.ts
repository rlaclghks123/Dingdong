import { useQuery } from 'react-query';
import { shopList } from '../api/shopList';

const SHOP_LIST_KEY = 'shotList';

const useGetShopList = () => useQuery(SHOP_LIST_KEY, shopList, { staleTime: 1000 * 60 * 60 * 24 });

export default useGetShopList;
