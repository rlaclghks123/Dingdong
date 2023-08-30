import { rest } from 'msw';
import {
  createStoresDataResponse as createShopListDataResponse,
  createFoodCategoriesDataResponse,
  createRecommendMenuListDataResponse,
  createAdBannersDataResponse,
} from './data/dingdongWorld';

const API_BASE_URL = import.meta.env.API_BASE_URL || 'http://localhost:5173';

type RestGetParams = Parameters<typeof rest.get>[1];

/**
 * @endPoint
 * 굳이 delivery로 시작한 이유
 *  - 추후에 배달, 포장에 따른 광고 및 추천이 달라질것이라 예상함 (즉, 배달페이지에서 포장만 가능한 market 추천 하면 안됨)
 */

export function handlers() {
  return [
    rest.get(`${API_BASE_URL}/delivery/categories/shopList`, createShopList),
    rest.get(`${API_BASE_URL}/delivery/categories`, createFoodCategories),
    rest.get(`${API_BASE_URL}/delivery/recommendMenuList`, createRecommendList),
    rest.get(`${API_BASE_URL}/delivery/adBanners`, createAdBanners),
  ];
}

const createShopList = (_, res, ctx) => {
  const storesDataResponse = createShopListDataResponse();

  return res(ctx.json(storesDataResponse));
};

const createFoodCategories: RestGetParams = (_, res, ctx) => {
  const categoriesData = createFoodCategoriesDataResponse();

  return res(ctx.json(categoriesData));
};

const createRecommendList: RestGetParams = (_, res, ctx) => {
  const recommendListData = createRecommendMenuListDataResponse();

  return res(ctx.json(recommendListData));
};

const createAdBanners: RestGetParams = (_, res, ctx) => {
  const adBannersResponse = createAdBannersDataResponse();

  return res(ctx.json(adBannersResponse));
};
