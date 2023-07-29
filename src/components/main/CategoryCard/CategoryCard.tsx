import { Wrapper, Title, Contents } from './CategoryCard.style';

interface ICategory {
  title: string;
  contents: string[];
}

const CategoryCard = ({ title, contents }: ICategory) => {
  return (
    <section css={Wrapper}>
      <div css={Title}>{title}</div>
      <div css={Contents}>
        {contents.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </section>
  );
};
export default CategoryCard;
