import React from 'react';
import { useBooks } from '../context/BookContext';

const FilterBar = () => {
  const { filters, setFilters } = useBooks();

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">Filtrar Libros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="title"
          placeholder="Filtrar por título"
          value={filters.title}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="author"
          placeholder="Filtrar por autor"
          value={filters.author}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <input
          name="genre"
          placeholder="Filtrar por género"
          value={filters.genre}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
    </div>
  );
};

export default FilterBar;
