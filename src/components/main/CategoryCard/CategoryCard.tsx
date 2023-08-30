import { Wrapper, Title, Contents } from './CategoryCard.style';

interface Props {
  title: string;
  contents: string[];
}

const CategoryCard = ({ title, contents }: Props) => {
  return (
    <div css={Wrapper}>
      <div css={Title}>{title}</div>
      {contents.map((item, i) => {
        return (
          <p css={Contents} key={`${item}-${i}`}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
export default CategoryCard;
