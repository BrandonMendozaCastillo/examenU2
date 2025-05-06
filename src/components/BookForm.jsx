import React, { useState } from 'react';
import { useBooks } from '../context/BookContext';

const initialForm = {
  id: null,
  title: '',
  author: '',
  genre: '',
  year: ''
};

const BookForm = () => {
  const { addBook } = useBooks();
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    addBook(form);
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="author"
          placeholder="Autor"
          value={form.author}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="genre"
          placeholder="Género"
          value={form.genre}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="year"
          placeholder="Año"
          value={form.year}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Agregar Libro
      </button>
    </form>
  );
};

export default BookForm;
