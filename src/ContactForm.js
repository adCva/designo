import React, { useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    // submit the form
  }

  return (
    <div className="container">
      <div className="column left">
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>
      <div className="column right">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default ContactForm;