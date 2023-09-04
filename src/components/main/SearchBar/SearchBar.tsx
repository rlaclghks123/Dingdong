import { useState } from 'react';

import { Input, Wrapper } from './SearchBar.style';
import useDropdown from '../../../hooks/useDropdown';
import Dropdown from '../../common/Dropdown/Dropdown';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const {
    handleDropDownKeyDown,
    isFocus,
    handleClickDropDownList,
    dropDownList,
    setDropDownItemIndex,
    dropDownItemIndex,
  } = useDropdown(inputValue);

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
  };

  return (
    <form css={Wrapper} data-id={'isInputFocus'} onSubmit={handleSubmit}>
      <input
        placeholder="테스트를 위해 피자를 입력해주세요"
        css={Input}
        autoComplete="off"
        type="text"
        name="keyword"
        value={inputValue}
        onChange={changeInputValue}
        onKeyDown={handleDropDownKeyDown}
      />
      {isFocus && (
        <Dropdown
          handleClickDropDownList={handleClickDropDownList}
          dropDownList={dropDownList}
          setDropDownItemIndex={setDropDownItemIndex}
          dropDownItemIndex={dropDownItemIndex}
        />
      )}
    </form>
  );
};

export default SearchBar;
