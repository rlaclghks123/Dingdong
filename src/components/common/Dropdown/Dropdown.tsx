import { css } from '@emotion/react';
import theme from '../../../styles/theme';

const DropDownBox = css`
  margin: -10px auto;
  padding-top: 10px;
  background-color: white;
  height: 100px;
`;

const DropDownItem = css`
  padding: 0 16px;

  &.selected {
    cursor: pointer;
    background-color: ${theme.grey200};
  }
`;

interface Props {
  handleClickDropDownList: (dropDownItem: string) => void;
  dropDownList: string[];
  setDropDownItemIndex: React.Dispatch<React.SetStateAction<number>>;
  dropDownItemIndex: number;
}

const Dropdown = ({ handleClickDropDownList, dropDownList, setDropDownItemIndex, dropDownItemIndex }: Props) => {
  return (
    <div css={DropDownBox}>
      {dropDownList.length === 0 && <div css={DropDownItem}>해당하는 단어가 없습니다</div>}
      {dropDownList.map((dropDownItem, dropDownIndex) => {
        return (
          <ul
            css={DropDownItem}
            key={`${dropDownItem}-${dropDownIndex}`}
            onClick={() => handleClickDropDownList(dropDownItem)}
            onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
            className={dropDownItemIndex === dropDownIndex ? 'selected' : 'null'}
          >
            <li>{dropDownItem}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Dropdown;
