import { Link } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';
import { useEffect, useState } from 'react';

import { Wrapper, MenuItemBox, LinkBox, Name, MenuCategoryBox } from './MenuCategory.style';
// import useGetFoodCategories from '../../../hooks/useGetFoodCategories';
import { CreateFoodCategoriesDataResponse, createFoodCategoriesDataResponse } from '../../../mocks/data/dingdongWorld';

const MenuCategory = () => {
  // const { data, isLoading } = useGetFoodCategories();
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState<CreateFoodCategoriesDataResponse[]>();
  const [isLoading, _] = useState(false);

  const useGetFoodCategories = async () => {
    try {
      setData(createFoodCategoriesDataResponse());
    } catch (error) {
      showBoundary(error);
    }
  };

  useEffect(() => {
    useGetFoodCategories();
  }, []);
  return (
    <section css={Wrapper}>
      {isLoading && <div>로딩중..</div>}
      {!isLoading && (
        <div css={MenuCategoryBox}>
          {data?.map((item: CreateFoodCategoriesDataResponse) => (
            <div css={MenuItemBox} key={item.uid}>
              <Link css={LinkBox} to={`/category/${item.title}`}>
                <span dangerouslySetInnerHTML={{ __html: item.SVG }} />
                <span css={Name}>{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuCategory;
