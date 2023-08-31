import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PREVIEW_LIST = [
  '굽네치킨',
  '지코바 치킨',
  '버거킹',
  'bhc',
  'bbq',
  'pizza',
  'pizza hut',
  'hamburger',
  '도미노피자',
  '반올림피자',
  '돈까스',
  '돈치킨',
  '치킨까스',
  '햄버거',
  '햄토스트',
];

const useDropdown = (inputValue: string) => {
  const navigate = useNavigate();
  const [dropDownList, setDropDownList] = useState(PREVIEW_LIST);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
  const [isFocus, setIsFocus] = useState(false);

  const updatedDropDownList = () => {
    if (inputValue === '') {
      setDropDownList([]);
      return;
    }

    const getRelatedKeywordArr = PREVIEW_LIST.filter(
      textItem => textItem.includes(inputValue.toLocaleLowerCase()) || textItem.includes(inputValue.toUpperCase())
    );

    setDropDownList(getRelatedKeywordArr);
    setDropDownItemIndex(-1);
  };

  const handleDropDownKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.trim() === '' || event.nativeEvent.isComposing) return;

    if (event.code === 'ArrowDown') {
      dropDownItemIndex === dropDownList.length - 1
        ? setDropDownItemIndex(-1)
        : setDropDownItemIndex(dropDownItemIndex + 1);
    }

    if (event.code === 'ArrowUp') {
      dropDownItemIndex === -1
        ? setDropDownItemIndex(dropDownList.length - 1)
        : setDropDownItemIndex(dropDownItemIndex - 1);
    }

    if (event.code === 'Enter') {
      let keyword = dropDownList[dropDownItemIndex] ? dropDownList[dropDownItemIndex] : inputValue;
      if (keyword.trim() === '') return;
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
    updatedDropDownList();
  }, [inputValue]);

  useEffect(() => {
    window.addEventListener('click', handleClickSearchBox);
    return () => {
      window.removeEventListener('click', handleClickSearchBox);
    };
  }, []);

  return {
    handleClickDropDownList,
    handleDropDownKeyDown,
    isFocus,
    dropDownList,
    setDropDownItemIndex,
    dropDownItemIndex,
  };
};

export default useDropdown;
