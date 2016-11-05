// Sate argument is not applicaiton state, only the state
// this reducer is responsible for - state flows into this reducer over
// and over again
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload; // payload is selected book
  }

  return state
}
