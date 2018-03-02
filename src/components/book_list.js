import React from 'react';
import BookListItem from './book_list_item';

const BookList = (props) => {

  if (props.books.totalItems === 0) {
    return null;
  }

  const bookItems = props.books.map((book) => {
    return (
      <BookListItem
      onBookSelect={props.onBookSelect}
      key={book.etag}
      book={book} />
    );
  });

  return (
    <ul className="col-md-6 list-group">
      {bookItems}
    </ul>
  );
};

export default BookList;
