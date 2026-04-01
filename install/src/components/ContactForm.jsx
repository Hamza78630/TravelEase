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

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', phone: '', subject: '', enquiry: '', message: '' });
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact Us</legend>
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
                      <option value="Cancellation">Cancellation / Refund</option>
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
                    <input type="submit" value="Send Message" />
                  </td>
                </tr>

              </tbody>
            </table>
          </fieldset>
        </form>
      </div>

      {submittedData && (
        <div className="form-container" style={{ marginTop: '24px' }}>
          <fieldset>
            <legend>Message Received ✓</legend>
            <table>
              <tbody>
                {[
                  { label: "Name", value: submittedData.name },
                  { label: "Email", value: submittedData.email },
                  { label: "Phone", value: submittedData.phone || '—' },
                  { label: "Enquiry Type", value: submittedData.enquiry },
                  { label: "Subject", value: submittedData.subject },
                  { label: "Message", value: submittedData.message },
                ].map((row, i) => (
                  <tr key={i}>
                    <td>{row.label}:</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </div>
      )}
    </>
  );
};

export default ContactForm;