import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // mapping of our state
  books: BooksReducer
});

export default rootReducer;
