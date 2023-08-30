import { Link } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import { Wrapper } from './CategoryList.style';

interface CategoryItem {
  link: string;
  title: string;
  contents: string[];
}

interface Props {
  category: CategoryItem[];
}

const CategoryList = ({ category }: Props) => {
  return (
    <section css={Wrapper}>
      {category.map(item => {
        return (
          <Link to={item.link} key={item.link}>
            <CategoryCard title={item.title} contents={item.contents} />
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryList;
