import { useEffect, useState } from 'react';
import { DropDownBox, DropDownItem, Input, Wrapper } from './SearchBar.style';
import { useNavigate } from 'react-router-dom';

const PREVIEW_LIST = ['bhc', 'bbq', '굽네치킨', '지코바', '맥도날드', '버거킹', '도미노'];

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [dropDownList, setDropDownList] = useState(PREVIEW_LIST);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
  const navigate = useNavigate();

  const showDropDownList = () => {
    if (inputValue === '') {
      setDropDownList([]);
    } else {
      const copyPreviewList = [...PREVIEW_LIST].filter(
        textItem => textItem.includes(inputValue.toLocaleLowerCase()) || textItem.includes(inputValue.toUpperCase())
      );
      setDropDownList(copyPreviewList);
    }
  };

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleDropDownKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      dropDownItemIndex === dropDownList.length - 1 ? setDropDownItemIndex(0) : setDropDownItemIndex(prev => prev + 1);
    }

    if (event.key === 'ArrowUp') {
      dropDownItemIndex === 0 ? setDropDownItemIndex(dropDownList.length - 1) : setDropDownItemIndex(prev => prev - 1);
    }

    if (event.key === 'Enter') {
      let keyword = dropDownList[dropDownItemIndex] ? dropDownList[dropDownItemIndex] : inputValue;
      navigate(`/search?keyword=${keyword}`);
    }
  };

  const handleClickSearchBox = (e: MouseEvent) => {
    const isFocus = (e.target as HTMLElement).closest('form')?.dataset.id;
    isFocus ? setIsFocus(true) : setIsFocus(false);
  };

  const handleClickDropDownList = (dropDownItem: string) => {
    navigate(`/search?keyword=${dropDownItem}`);
  };

  useEffect(() => {
    showDropDownList();
  }, [inputValue]);

  useEffect(() => {
    window.addEventListener('click', handleClickSearchBox);
    return () => {
      window.removeEventListener('click', handleClickSearchBox);
    };
  }, []);

  const DropDown = () => {
    return (
      <div css={DropDownBox}>
        {dropDownList.length === 0 && <div css={DropDownItem}>해당하는 단어가 없습니다</div>}
        {dropDownList.map((dropDownItem, dropDownIndex) => {
          return (
            <div
              css={DropDownItem}
              key={`${dropDownItem}-${dropDownIndex}`}
              onClick={() => handleClickDropDownList(dropDownItem)}
              onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
              className={dropDownItemIndex === dropDownIndex ? 'selected' : ''}
            >
              {dropDownItem}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <form css={Wrapper} data-id={'isInputFocus'} onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
      <div>
        <input
          css={Input}
          autoComplete="off"
          type="text"
          name="keyword"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleDropDownKeyUp}
        />
        {isFocus && <DropDown />}
      </div>
    </form>
  );
};

export default SearchBar;
