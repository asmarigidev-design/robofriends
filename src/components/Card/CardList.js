import React from 'react';
import Card from './Card.js';

// کامپوننت لیست کارت‌ها برای نمایش مجموعه‌ای از ربات‌ها - CardList component for displaying robot collection
const CardList = ({ robots }) => {
  return (
    <div>
      {
        // ایجاد کارت برای هر ربات با استفاده از map - Generating a card for each robot using map
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

// خروجی گرفتن از کامپوننت لیست کارت‌ها - Exporting CardList component
export default CardList;
