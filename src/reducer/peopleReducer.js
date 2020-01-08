// reducers/peopleReducer.js
import { ADD_PERSON, REMOVE_PERSON } from '../actions/actionTypes';

const initialState = {
  people: [{ name: 'Chris' }]
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person],
      };
    case REMOVE_PERSON:
      return {
        people: state.people.filter(p => p.name !== action.person.name),
      };
    default:
      return state;
  }
}