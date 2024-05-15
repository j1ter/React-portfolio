import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPortfolioItemAsync, removePortfolioItemAsync, updatePortfolioItemAsync } from '../redux/actions/portfolioActions'; // Убедитесь, что импортированы асинхронные actions

const AddPortfolioItem = () => {
  const [item, setItem] = useState({ title: '', imageUrl: '', link: '' });
  const [editingId, setEditingId] = useState('');
  const dispatch = useDispatch();
  const portfolioItems = useSelector(state => state.portfolio.portfolioItems);

  useEffect(() => {
    if (editingId) {
      const item = portfolioItems.find(item => item.id === editingId);
      if (item) {
        setItem(item);
      }
    }
  }, [editingId, portfolioItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', item.title);
    formData.append('image', item.imageUrl); // Теперь 'image' это файл, а не URL
    formData.append('link', item.link);

    if (editingId) {
        await fetch(`http://localhost:5000/api/portfolio/${editingId}`, {
            method: 'PUT', // Используйте метод PUT для обновления
            body: formData,
        });
    } else {
        await fetch('http://localhost:5000/api/portfolio', {
            method: 'POST',
            body: formData,
        });
    }

    setItem({ title: '', imageUrl: '', link: '' }); // Сброс формы
    setEditingId('');
};

  const handleEdit = (item) => {
    setEditingId(item.id);
    setItem(item);
  };

  const handleDelete = (id) => {
    dispatch(removePortfolioItemAsync(id));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-3" encType="multipart/form-data">
        <h2>{editingId ? 'Update Work' : 'Add New Work'}</h2>
        <input type="text" className="form-control mb-2" placeholder="Title" value={item.title} onChange={e => setItem({ ...item, title: e.target.value })} required />
        {/* Измените поле ввода URL изображения на файловый ввод */}
        <input type="file" className="form-control mb-2" placeholder="Upload Image" onChange={e => setItem({ ...item, imageUrl: e.target.files[0] })} required />
        <input type="text" className="form-control mb-2" placeholder="Link" value={item.link} onChange={e => setItem({ ...item, link: e.target.value })} required />
        <button type="submit" className="btn btn-primary">{editingId ? 'Save Changes' : 'Add'}</button>
      </form>
      <div className="d-flex flex-wrap">
        {portfolioItems.map(item => (
          <div key={item.id} className="card m-2" style={{ width: '18rem', height: '300px' }}>
            <img src={item.imageUrl} className="card-img-top" alt={item.title} style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text"><small className="text-muted">{item.link}</small></p>
              <button onClick={() => handleEdit(item)} className="btn btn-success me-2">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPortfolioItem;
