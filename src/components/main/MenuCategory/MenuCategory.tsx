import { Link } from 'react-router-dom';

import { Wrapper, MenuItemBox, LinkBox, Name, MenuCategoryBox } from './MenuCategory.style';
import useGetFoodCategories from '../../../hooks/useGetFoodCategories';
import { CreateFoodCategoriesDataResponse } from '../../../mocks/data/dingdongWorld';

const MenuCategory = () => {
  const { data, isLoading } = useGetFoodCategories();

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
