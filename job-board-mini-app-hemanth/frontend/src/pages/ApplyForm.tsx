import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function ApplyForm() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', email: '', resume_link: '', cover_letter: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/applications', { ...form, job_id: id });
    alert('Application submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="resume_link" placeholder="Resume Link" onChange={handleChange} required />
      <textarea name="cover_letter" placeholder="Cover Letter" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}
