import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPortfolioItemAsync, removePortfolioItemAsync, updatePortfolioItemAsync, fetchPortfolioItems } from '../redux/actions/portfolioActions';

const AddPortfolioItem = () => {
  const [item, setItem] = useState({ title: '', imageUrl: '', link: '' });
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState('');
  const dispatch = useDispatch();
  const portfolioItems = useSelector(state => state.portfolio.portfolioItems);

  useEffect(() => {
    dispatch(fetchPortfolioItems());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!item.title || !item.link) {
      alert('Title and link are required');
      return;
    }
  
    const formData = new FormData();
    formData.append('title', item.title);
    formData.append('link', item.link);
    if (item.imageUrl instanceof File) {
      formData.append('image', item.imageUrl);
    }
  
    try {
      const response = await fetch(editingId ? `http://localhost:5000/api/portfolio/${editingId}` : 'http://localhost:5000/api/portfolio', {
        method: editingId ? 'PUT' : 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        if (editingId) {
          dispatch(updatePortfolioItemAsync({ ...item, id: editingId }));
        } else {
          dispatch(addPortfolioItemAsync(data));
        }
        setEditingId('');
        setItem({ title: '', imageUrl: '', link: '' });
      } else {
        throw new Error('Failed to perform the operation');
      }
    } catch (error) {
      console.error('Operation failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleEdit = (item) => {
    setEditingId(item.id);
    setItem({ title: item.title, imageUrl: item.imageUrl, link: item.link });
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:5000/api/portfolio/${id}`, {
        method: 'DELETE',
      });
      dispatch(removePortfolioItemAsync(id));
    } catch (error) {
      console.error('Failed to delete:', error);
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = {
    width: '18rem',
    height: '300px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const imgStyle = {
    height: '150px',
    objectFit: 'cover'
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  };

  return (
    <div className="container" style={containerStyle}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} encType="multipart/form-data">
        <h2>{editingId ? 'Update Work' : 'Add New Work'}</h2>
        <input type="text" style={{ marginBottom: '10px' }} placeholder="Title" value={item.title} onChange={e => setItem({ ...item, title: e.target.value })} required />
        <input type="file" style={{ marginBottom: '10px' }} onChange={e => setItem({ ...item, imageUrl: e.target.files[0] })} />
        <input type="text" style={{ marginBottom: '10px' }} placeholder="Link" value={item.link} onChange={e => setItem({ ...item, link: e.target.value })} required />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>{editingId ? 'Save Changes' : 'Add'}</button>
      </form>
      {loading && <p>Loading...</p>}
      {portfolioItems.map(item => (
          <div key={item.id} style={cardStyle}>
            <img 
              src={typeof item.imageUrl === 'string' ? `http://localhost:5000/uploads/${item.imageUrl.split('/').pop()}` : URL.createObjectURL(item.imageUrl)} 
              style={imgStyle} 
              alt={item.title} 
            />
            <div style={{ padding: '10px' }}>
              <h5>{item.title}</h5>
              <p><small>{item.link}</small></p>
              <button onClick={() => handleEdit(item)} style={{ marginRight: '5px', padding: '5px 10px', cursor: 'pointer' }}>Edit</button>
              <button onClick={() => handleDelete(item.id)} style={{ padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}

    </div>
  );
};

export default AddPortfolioItem;
