import React from 'react';
import { BookProvider } from './context/BookContext';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import FilterBar from './components/FilterBar';

const App = () => {
  return (
    <BookProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Examen</h1>
        <div className="max-w-4xl mx-auto space-y-4">
          <BookForm />
          <FilterBar />
          <BookList />
        </div>
      </div>
    </BookProvider>
  );
};

export default App;
