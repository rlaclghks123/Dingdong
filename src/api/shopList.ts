import { fetcher } from './index';

const SHOP_LIST_ENDPOINT = '/delivery/categories/shopList';

export const shopList = async () => {
  const { data } = await fetcher.get(SHOP_LIST_ENDPOINT);
  return data;
};
