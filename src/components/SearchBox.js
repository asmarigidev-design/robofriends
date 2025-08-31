import React from 'react';

// کامپوننت جستجو برای فیلتر کردن ربات‌ها - SearchBox component for filtering robots
const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      {/* ورودی جستجو با استایل و هندلر تغییر - Search input with styling and change handler */}
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search for robots'
        onChange={searchChange}
      />
    </div>
  );
}

// خروجی گرفتن از کامپوننت جستجو - Exporting SearchBox component
export default SearchBox;
