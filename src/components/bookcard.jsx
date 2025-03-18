import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-64">
      <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
      <p className="text-sm text-gray-600">{book.genre}</p>
      <p className="text-sm text-gray-800">By {book.author}</p>
    </div>
  );
};

export default BookCard;
