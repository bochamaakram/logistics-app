import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setErrors(formErrors);
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'light-mode' : 'dark-mode'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className='holder'></div>
    <div className='Content'>
      <div className='contact'>
      <div>
  <div>
    <div>
      <div>
        <div>
          <span>CAMIVERRE vous écoute</span>
        </div>
        <h2>Où nous sommes? Découvrons-le!</h2>
        <p>Pour toutes autres questions, veuillez contacter notre service commercial.</p>
      </div>
    </div>
    <div>
      <span></span>
    </div>
    <div>
      <div>
        <p>274, Lot Alkaram Quartier industriel Sidi Ghanem</p>
      </div>
    </div>
    <div>
      <span></span>
    </div>
    <div>
      <div>
        <a href="tel:+2120524356879"></a>
      </div>
      <div>
        <p>+212 (0) 5 24 35 68 79 +212 (0) 6 62 84 36 44</p>
      </div>
    </div>
    <div>
      <span></span>
    </div>
    <div>
      <div>
        <a href="mailto:contact@camiverre.com"></a>
      </div>
      <div>
        <p>contact@camiverre.com</p>
      </div>
    </div>
  </div>
</div>
        <div>
      <h3>Contacter Nous</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form></div>
    <div>
      
    </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;