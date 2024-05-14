import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPortfolioItem } from '../redux/actions/portfolioActions';
import { useNavigate } from 'react-router-dom';

const AddPortfolioItem = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      title,
      imageUrl,
      link
    };
    dispatch(addPortfolioItem(newItem));
    setTitle('');
    setImageUrl('');
    setLink('');
    navigate('/'); // Перенаправление на главную страницу портфолио после добавления элемента
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-form">
        <h2>Добавить новую работу в портфолио</h2>
        <input type="text" placeholder="Название работы" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="URL изображения" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <input type="text" placeholder="Ссылка на работу" value={link} onChange={(e) => setLink(e.target.value)} required />
        <button type="submit">Добавить работу</button>
      </form>
    </div>
  );
};

export default AddPortfolioItem;
