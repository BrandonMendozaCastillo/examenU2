import React from 'react';
import { useBooks } from '../context/BookContext';
import BookItem from './BookItem';

const BookList = () => {
  const { books, filters } = useBooks();

  // Filtrar los libros según los filtros establecidos
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      book.genre.toLowerCase().includes(filters.genre.toLowerCase())
    );
  });

  return (
    <div className="bg-white shadow-md rounded p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Lista de Libros</h2>
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <li>No se encontraron libros.</li>
        )}
      </ul>
    </div>
  );
};

export default BookList;
