import React, { useState } from 'react';

const RegistrationForm = () => {

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

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
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
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Registration Form</legend>

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
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                    /> Female
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                    /> Male
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
                    <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" align="center">
                    <input type="submit" value="Submit" />
                  </td>
                </tr>

              </tbody>
            </table>
          </fieldset>
        </form>
        </div>

      {submittedData && (
  <div className="form-container">
    <fieldset>
      <legend>Submitted Details</legend>

      <table>
        <tbody>
          <tr>
            <td>Full Name:</td>
            <td>{submittedData.fname} {submittedData.lname}</td>
          </tr>

          <tr>
            <td>Age:</td>
            <td>{submittedData.age}</td>
          </tr>

          <tr>
            <td>Gender:</td>
            <td>{submittedData.gender}</td>
          </tr>

          <tr>
            <td>Password:</td>
            <td>{submittedData.pass}</td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>{submittedData.email}</td>
          </tr>

          <tr>
            <td>Contact:</td>
            <td>{submittedData.phone}</td>
          </tr>

          <tr>
            <td>Travel Date:</td>
            <td>{submittedData.date}</td>
          </tr>
          <tr>
            <td>Accepted Terms:</td>
            <td>{submittedData.terms ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
    </div>
  )}
    </>
  );
};

export default RegistrationForm;
