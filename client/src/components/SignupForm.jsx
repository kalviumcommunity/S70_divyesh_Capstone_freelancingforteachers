import React, { useState } from 'react';

const SignupForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form); // Replace with API call
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Signup</h2>
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Signup</button>
    </form>
  );
};

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '2rem auto' },
};

export default SignupForm;
