import React from 'react';

const BookDetail = ({book}) => {
  if (!book) {
    return <div className="spinner"><img src="./src/img/Spinner.gif" /></div>;
  }

  function renderAuthor(book) {
      if (!book.volumeInfo.authors) return null;
      return book.volumeInfo.authors;
    }

  let imageURL = './src/img/img.jpg';

  if (book.volumeInfo.imageLinks) {
    imageURL = book.volumeInfo.imageLinks.thumbnail;
  }

  return (
    <div className="book-detail col-md-6">
      <div className="details">
        <img className="media-object" src={imageURL} /><br/>
        <div className="center-text">{book.volumeInfo.title}<br/><br/>
        {renderAuthor(book)}</div><br/>
        {book.volumeInfo.description}
      </div>
    </div>
  );
};

export default BookDetail;
