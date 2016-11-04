import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      <li key={book.title} className="list-group-itme">
        {book.title}
      </li>
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
