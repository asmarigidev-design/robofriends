import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import 'tachyons'; // اضافه کردن کتابخانه استایل‌دهی تاکیونز - Importing Tachyons CSS utility library

// رندر کردن کامپوننت اصلی در عنصر root - Rendering main App component into root element
ReactDOM.render(<App />, document.getElementById('root'));

// فعال‌سازی ابزار سنجش عملکرد اپلیکیشن - Enabling performance measurement tool
reportWebVitals();
