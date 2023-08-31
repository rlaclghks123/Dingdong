import { SortProps } from '../../pages/DeliveryPage/DeliveryPage';
import { ModalDarkBgWrapper, ModalContentsBox, ModalTitle, ModalUl, CloseBtn } from './SortModal.style';

interface SortModalProps {
  sortList: SortProps[];
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortModal = ({ sortList, setIsClicked }: SortModalProps) => {
  const handleClick = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div css={ModalDarkBgWrapper} onClick={handleClick} />
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
