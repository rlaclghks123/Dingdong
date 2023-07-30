import { css } from '@emotion/react';
import commonStyle from '../../styles/common';
import { Item } from '../../pages/MainPage/HomePage';

interface SortModalProps {
  sortList: Item[];
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDarkBgWrapper = css`
  position: absolute;
  width: 100%;
  height: 1200px;
  top: 0px;

  background-color: black;
  opacity: 0.7;
`;

const ModalContentsBox = css`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 50%;
  right: 50%;
  bottom: 0px;
  transform: translate(-50%, 0%);

  width: ${commonStyle.maxWidth};
  height: 70%;
  background-color: white;
  border-radius: 8px;
`;

const ModalTitle = css`
  text-align: center;
  padding: ${commonStyle.boxFullPadding};
`;

const ModalUl = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 90%;
  padding: ${commonStyle.boxFullPadding};
`;

const CloseBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10%;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const SortModal = ({ sortList, setIsClicked }: SortModalProps) => {
  const handleClick = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div css={ModalDarkBgWrapper}></div>
      <div css={ModalContentsBox}>
        <h2 css={ModalTitle}>정렬</h2>
        <ul css={ModalUl}>
          {sortList.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <button css={CloseBtn} onClick={handleClick}>
          닫기
        </button>
      </div>
    </>
  );
};

export default SortModal;
