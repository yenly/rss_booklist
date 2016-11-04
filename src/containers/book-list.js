import React, { Component } from 'react';
import { connect } from 'react-redux'; // pull just a single property
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
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

function mapStateToProps(state) {
  // whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs ot know
// about this new dispatch method, selectBook. Make it available as prop.
// most generic and widely use case
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
