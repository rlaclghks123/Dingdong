import { fetcher } from './index';

const FOOD_CATEGORIES_ENDPOINT = '/delivery/categories';

export const foodCategories = async () => {
  const { data } = await fetcher.get(FOOD_CATEGORIES_ENDPOINT);

  return data;
};
