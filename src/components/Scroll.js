import React from 'react';

// کامپوننت اسکرول برای ایجاد ناحیه قابل پیمایش - Scroll component for scrollable area
const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
      {/* نمایش فرزندان داخل ناحیه اسکرول‌دار - Rendering children inside scrollable area */}
      {props.children}
    </div>
  );
}

// خروجی گرفتن از کامپوننت اسکرول - Exporting Scroll component
export default Scroll;
