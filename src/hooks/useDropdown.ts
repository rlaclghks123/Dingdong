import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PREVIEW_LIST = [
  'bhc',
  'bbq',
  '굽네치킨',
  '지코바 치킨',
  '버거킹',
  '도미노 피자',
  '반올림 피자',
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
  };

  const handleDropDownKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.trim() === '') return;

    if (event.key === 'ArrowDown') {
      dropDownItemIndex === dropDownList.length - 1 ? setDropDownItemIndex(-1) : setDropDownItemIndex(prev => prev + 1);
    }

    if (event.key === 'ArrowUp') {
      dropDownItemIndex === -1 ? setDropDownItemIndex(dropDownList.length - 1) : setDropDownItemIndex(prev => prev - 1);
    }

    if (event.key === 'Enter') {
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
    handleDropDownKeyUp,
    isFocus,
    dropDownList,
    setDropDownItemIndex,
    dropDownItemIndex,
  };
};

export default useDropdown;
