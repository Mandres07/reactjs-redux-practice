import { ADD, DELETE } from '../actions/persons';

const initialState = {
   persons: []
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD:
         const newPersons = [...state.persons];
         const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: action.payload.name,
            age: action.payload.age
         }
         newPersons.push(newPerson);
         return {
            ...state,
            persons: newPersons
         };
      case DELETE:
         const updatedPersons = state.persons.filter(person => person.id !== action.personId);
         return {
            ...state,
            persons: updatedPersons
         };
      default:
         return state;
   }
}

export default reducer;