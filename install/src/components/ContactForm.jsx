import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    enquiry: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('https://traveleasebackend-dn0ivp9p.b4a.run/contacts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          enquiryType: formData.enquiry,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await res.json();

      if (data.status === "ERROR") {
        throw new Error(data.message);
      }

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', enquiry: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact Us</legend>

            {error && (
              <p style={{ color: 'red' }}>⚠️ {error}</p>
            )}
            {success && (
              <p style={{ color: 'green' }}>✅ Message sent! We'll get back to you soon.</p>
            )}

            <table>
              <tbody>

                <tr>
                  <td>Name:</td>
                  <td>
                    <input type="text" name="name" value={formData.name}
                      onChange={handleChange} placeholder="Your full name" required />
                  </td>
                </tr>

                <tr>
                  <td>Email:</td>
                  <td>
                    <input type="email" name="email" value={formData.email}
                      onChange={handleChange} placeholder="you@example.com" required />
                  </td>
                </tr>

                <tr>
                  <td>Phone:</td>
                  <td>
                    <input type="tel" name="phone" value={formData.phone}
                      onChange={handleChange} placeholder="+92 300 0000000" />
                  </td>
                </tr>

                <tr>
                  <td>Enquiry Type:</td>
                  <td>
                    <select name="enquiry" value={formData.enquiry} onChange={handleChange} required>
                      <option value="">Select a topic</option>
                      <option value="Booking Help">Booking Help</option>
                      <option value="Package Info">Package Info</option>
                      <option value="Cancellation/Refund">Cancellation / Refund</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>Subject:</td>
                  <td>
                    <input type="text" name="subject" value={formData.subject}
                      onChange={handleChange} placeholder="Brief subject" required />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    Message:
                    <br /><br />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" align="center">
                    <input type="submit" value={loading ? "Sending..." : "Send Message"} disabled={loading} />
                  </td>
                </tr>

              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default ContactForm;