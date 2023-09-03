import { useQuery } from 'react-query';
import { foodCategories } from '../api/foodCategories';

const FOOD_CATEGORIES_KEY = 'foodCategories';

const useGetFoodCategories = () => useQuery(FOOD_CATEGORIES_KEY, foodCategories);

export default useGetFoodCategories;
