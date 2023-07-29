import { Link } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import { Wrapper } from './CategoryList.style';

interface CategoryItem {
  link: string;
  title: string;
  contents: string[];
}

interface CategoryListProps {
  category: CategoryItem[];
}

const CategoryList = ({ category }: CategoryListProps) => {
  return (
    <section css={Wrapper}>
      {category.map((item, i) => {
        return (
          <Link to={item.link} key={i}>
            <CategoryCard title={item.title} contents={item.contents} />
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryList;
