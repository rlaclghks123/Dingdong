import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { CarouselChildProps } from '../../Carousel/Carousel';

interface ImgProps {
  width: number;
}

const Wrapper = css`
  display: flex;
  position: relative;

  background-color: white;
`;

const Img = styled.img<ImgProps>`
  width: ${({ width }) => (width ? `${width}px` : '360px')};
  height: 150px;
`;

const TitleBox = css`
  position: absolute;

  width: 100%;
  height: 100%;

  padding: 16px;

  text-align: left;

  color: white;
`;

const Banner = ({ items, itemWidth, carouselItemsRef }: CarouselChildProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (carouselItemsRef?.current?.startPosition === e.clientX) {
      navigate(items[Number(e.currentTarget.dataset.id)].link || '');
    }
  };

  return (
    <div css={Wrapper}>
      {items.map((item, index) => (
        <button key={index} onClick={handleClick} data-id={index}>
          <Img css={Img} width={itemWidth} src={item.img} alt={`${item.title} 사진`} />
          <p css={TitleBox}>{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default Banner;
