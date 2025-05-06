import React from 'react';
import { useBooks } from '../context/BookContext';

const BookItem = ({ book }) => {
  const { deleteBook } = useBooks();

  return (
    <li className="flex justify-between items-center py-2 border-b">
      <div>
        <p className="font-semibold">{book.title}</p>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <p>{book.year}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => deleteBook(book.id)}
          className="text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
        {/* Aquí agregarías el botón de editar */}
      </div>
    </li>
  );
};

export default BookItem;
