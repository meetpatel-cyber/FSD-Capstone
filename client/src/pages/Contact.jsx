import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:5000/api/inquiries',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setStatus(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Unable to submit inquiry. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>Have a question? Send us an inquiry.</p>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="name" value={formData.name} 
        onChange={handleChange} placeholder="Your Name" required/>
        <input className="form-control mb-3" name="email" type="email" value={formData.email} 
        onChange={handleChange} placeholder="Your Email" required/>
        <textarea className="form-control mb-3" name="message" value={formData.message} 
        onChange={handleChange} placeholder="Your Message" rows="4" required/>
        <button className="btn btn-primary" type="submit">
          Submit Inquiry
        </button>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
export default Contact;
