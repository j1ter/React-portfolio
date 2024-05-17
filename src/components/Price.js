import React from 'react';

const Price = () => {
  const prices = [
    { type: "Landing-page", count: "от 40000 тг.", description: "Одностраничный сайт для презентации услуг/товаров/..." },
    { type: "Корпоративный сайт", count: "от 100000 тг.", description: "Сайт для вашего бизнеса или компании" },
    { type: "Интернет-магазин", count: "от 150000 тг.", description: "Инструмент для ваших продаж в сети" },
    { type: "Web-приложение", count: "от 140000 тг.", description: "Приложение внутри браузера для лучшего комфорта" },
    { type: "Android/IOS Приложение", count: "от 125000 тг.", description: "Приложение для смартфона любой ОС" },
    { type: "Дизайн", count: "Индивидуально", description: "Создам дизайн для вашего сайта/приложения..." }
  ];

  return (
    <section className="price" id="price">
      <div className="container">
        <h2 className="title title_fz16 title_black price__title">Прайс-лист</h2>
        <div className="divider"></div>
        <div className="price__wrapper">
          {prices.map((price, index) => (
            <div key={index} className="price__item">
              <div className="price__type">{price.type}</div>
              <div className="price__count">{price.count}</div>
              <div className="price__descr">{price.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
