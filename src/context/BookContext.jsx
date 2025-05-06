import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const BookContext = createContext();

// Hook para usar el contexto
export const useBooks = () => useContext(BookContext);

// Componente proveedor
export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books');
    return saved ? JSON.parse(saved) : [];
  });

  const [filters, setFilters] = useState({ title: '', author: '', genre: '' });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const value = {
    books,
    addBook,
    updateBook,
    deleteBook,
    filters,
    setFilters,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
