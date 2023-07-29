import { css } from '@emotion/react';
import { Item } from '../../../pages/MainPage/HomePage';
import styled from '@emotion/styled';

interface RecommendProps {
  items: Item[];
  itemWidth: number;
  itemGap: number;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ImgProps {
  width: number;
}

interface WrapperProps {
  itemGap: number;
}

const Wrapper = styled.section<WrapperProps>`
  gap: 10px;
  gap: ${({ itemGap }) => (itemGap ? `${itemGap}px` : '0px')};
  display: flex;
  position: relative;
`;

const Button = css`
  border-radius: 24px;
`;

const Img = styled.img<ImgProps>`
  width: ${({ width }) => (width ? `${width}px` : '120px')};
  height: 120px;
  border-radius: 24px;
`;

const TitleBox = css`
  position: absolute;
  width: 120px;
  height: 150px;
  padding: 16px 8px;
  text-align: left;
  color: white;
`;

const Recommend = ({ items, itemWidth, itemGap, handleClick }: RecommendProps) => {
  return (
    <Wrapper itemGap={itemGap}>
      {items.map((item, index) => (
        <button css={Button} key={index} onClick={handleClick} data-id={index}>
          <Img css={Img} width={itemWidth} src={item.img} alt={`${item.title} 사진`} />
          <p css={TitleBox}>{item.title}</p>
        </button>
      ))}
    </Wrapper>
  );
};

export default Recommend;
