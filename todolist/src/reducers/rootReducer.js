import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer
});

export default rootReducer;
