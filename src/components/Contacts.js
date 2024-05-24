import React, { useState } from 'react';
import MainPhoto from '../img/main_photo.png';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Спасибо за ваше сообщение!');
        setFormData({ name: '', email: '', message: '' }); // Очистка формы
        setShowModal(true); // Показать модальное окно
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__photo">
            <img src={MainPhoto} alt="mainPhoto" />
          </div>
          <div className="contacts__descr">
            <h2 className="title title_fz16 contacts__title title_black">Контакты</h2>
            <div className="title title_fz36 contacts__subtitle title_black">Свяжитесь со мной</div>
            <div className="divider"></div>

            <div className="title title_fz14 contacts__text title_black">Любым удобным для вас способом:</div>
            <form onSubmit={handleSubmit} className="contacts__form">
              <div className="contacts__input">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="name">Ваше имя</label>
              </div>
              <div className="contacts__input">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="email">Ваша почта</label>
              </div>
              <div className="contacts__textarea">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <label htmlFor="message">Ваше сообщение</label>
              </div>
              <button type="submit" className="contacts__btn btn" disabled={loading}>Отправить сообщение</button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="overlay">
          <div className="modal modal_mini" id="thanks">
            <div className="modal__close" onClick={() => setShowModal(false)}>&times;</div>
            <div className="modal__subtitle">Спасибо за ваше сообщение!</div>
            <div className="modal__descr">Наш разработчик свяжется с вами в ближайшее время!</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacts;
