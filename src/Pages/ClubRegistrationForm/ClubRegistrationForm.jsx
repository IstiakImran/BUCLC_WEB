import React, { useState } from 'react';
import './ClubRegistrationForm.css';

// Import placeholder images for each department
import publicationBackground from '../../assets/images/publication-background.jpg';
import hrBackground from '../../assets/images/hr-background.jpg';
import itBackground from '../../assets/images/it-background.jpg';
import photoMediaBackground from '../../assets/images/photo-media-background.avif';

const ClubRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: 'publication',
    gsuit: '',
    studentId: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    gsuit: '',
    studentId: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { name, gsuit, studentId } = formData;

    const newFormErrors = {
      name: name.trim() === '' ? 'Name is required' : '',
      gsuit: gsuit.trim() === '' ? 'GSuit Email is required' : '',
      studentId: studentId.trim() === '' ? 'Student ID is required' : '',
    };

    const newIsFormValid = Object.values(newFormErrors).every((error) => error === '');

    setFormErrors(newFormErrors);
    setIsFormValid(newIsFormValid);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setFormData({ ...formData, department });
    validateForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here (e.g., send data to server)

    // Reset the form after submission
    setFormData({
      name: '',
      gsuit: '',
      studentId: '',
      department: 'publication',
    });

    setFormErrors({
      name: '',
      gsuit: '',
      studentId: '',
    });

    setIsFormValid(false);

    alert('Registration successful!');
  };

  const { name, department, gsuit, studentId } = formData;

  // Define background image based on the selected department
  const getBackgroundImage = () => {
    switch (department) {
      case 'hr':
        return hrBackground;
      case 'it':
        return itBackground;
      case 'photo_media':
        return photoMediaBackground;
      default:
        return publicationBackground;
    }
  };

  return (
    <div className={`registration-form-img ${department}`} style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
         <div className={`registration-form ${department}`}>
      <h2>BRAC University Communication and Language Club Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="John Doe"
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </label>
        <label>
          GSuit Email:
          <input
            type="email"
            name="gsuit"
            value={gsuit}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
          />
          {formErrors.gsuit && <span className="error">{formErrors.gsuit}</span>}
        </label>
        <label>
          Student ID:
          <input
            type="text"
            name="studentId"
            value={studentId}
            onChange={handleInputChange}
            placeholder="123456"
          />
          {formErrors.studentId && <span className="error">{formErrors.studentId}</span>}
        </label>
        <label>
          Department:
          <select name="department" value={department} onChange={handleDepartmentChange}>
            <option value="publication">Publication</option>
            <option value="hr">HR</option>
            <option value="it">IT</option>
            <option value="photo_media">Photo and Media</option>
          </select>
        </label>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default ClubRegistrationForm;
