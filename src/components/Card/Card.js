import React from 'react';

// کامپوننت کارت برای نمایش اطلاعات هر ربات - Card component for displaying robot info
const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      {/* تصویر ربات با استفاده از شناسه - Robot image using ID */}
      <img alt='robot' src={`https://robohash.org/${id}?200*200`} />
      
      {/* نمایش نام و ایمیل ربات - Displaying robot name and email */}
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

// خروجی گرفتن از کامپوننت کارت - Exporting Card component
export default Card;
