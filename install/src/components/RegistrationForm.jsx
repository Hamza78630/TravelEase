import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
    gender: '',
    email: '',
    pass: '',
    phone: '',
    date: '',
    terms: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('https://traveleasebackend-dn0ivp9p.b4a.run/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.fname,
          lastName: formData.lname,
          age: Number(formData.age),
          gender: formData.gender,
          email: formData.email,
          password: formData.pass,
          contactNo: formData.phone,
          travelDate: formData.date,
          termsAccepted: formData.terms
        })
      });

      const data = await res.json();

      if (data.status === "ERROR") {
        throw new Error(data.message);
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.userId);

      navigate('/profile');

      setSuccess(true);
      setFormData({
        fname: '',
        lname: '',
        age: '',
        gender: '',
        email: '',
        pass: '',
        phone: '',
        date: '',
        terms: false
      });
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
            <legend>Registration Form</legend>

            {error && (
              <p style={{ color: 'red' }}>⚠️ {error}</p>
            )}
            {success && (
              <p style={{ color: 'green' }}>✅ Registered successfully!</p>
            )}

            <table>
              <tbody>

                <tr>
                  <td>First Name:</td>
                  <td>
                    <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <td>Last Name:</td>
                  <td>
                    <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <td>Age:</td>
                  <td>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} min="18" required />
                  </td>
                </tr>

                <tr>
                  <td>Gender:</td>
                  <td>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                  </td>
                </tr>

                <tr>
                  <td>Email Address:</td>
                  <td>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <td>Password:</td>
                  <td>
                    <input type="password" name="pass" value={formData.pass} onChange={handleChange} minLength="8" required />
                  </td>
                </tr>

                <tr>
                  <td>Contact No.:</td>
                  <td>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <td>Travel Date:</td>
                  <td>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <td>Terms & Conditions:</td>
                  <td>
                    <label className="checkbox-option">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                      />
                      I agree to Terms & Conditions
                    </label>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" align="center">
                    <input type="submit" value={loading ? "Submitting..." : "Submit"} disabled={loading} />
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

export default RegistrationForm;