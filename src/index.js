import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './components/search_bar';
import BookList from './components/book_list';
import BookDetail from './components/book_detail';
const API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      selectedBook: null
    };

    this.bookSearch('Harry Potter');
  }

  bookSearch(term) {
    if (!term) return;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${API_KEY}`)
    .then(response => this.setState({
      books: response.data.items,
      selectedBook: response.data.items[0]
     }))
    .catch(err => console.log(err));
  }

  render() {
    const bookSearch = _.debounce((term) => { this.bookSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={bookSearch} />
        <div className="container">
          <div className="row">
            <BookDetail book={this.state.selectedBook} />
            <BookList
              onBookSelect={selectedBook => this.setState({selectedBook})}
              books={this.state.books} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.content'));
