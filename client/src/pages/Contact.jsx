
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

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

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">

            <div className="text-center mb-4">
              <h2>Contact Us</h2>
              <p>Have a question? We'd love to hear from you.</p>
            </div>

            {status === 'success' && (
              <div className="alert alert-success">
                Your inquiry has been submitted successfully!
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-danger">
                Unable to submit your inquiry. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  className="form-control custom-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  className="form-control custom-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control custom-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                />
              </div>

              <button
                className="btn btn-wine w-100"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
