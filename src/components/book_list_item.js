import React from 'react';

const BookListItem = ({book, onBookSelect}) => {
  let imageURL = './src/img/img.jpg';

  if (book.volumeInfo.imageLinks) {
    imageURL = book.volumeInfo.imageLinks.smallThumbnail;
  }

  function renderAuthor(book) {
    if (!book.volumeInfo.authors) return null;
    return book.volumeInfo.authors;
  }

  return (
    <li onClick={() => onBookSelect(book)} className="list-group-item">
      <div className="book-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {book.volumeInfo.title}
            <br/>
            <br/>
            {renderAuthor(book)}
          </div>
        </div>
      </div>
    </li>
  );
};

export default BookListItem;
