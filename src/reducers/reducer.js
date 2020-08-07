import {
  ADD_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  RESET,
  FETCH_TODO,
  CHANGE_TODO,
} from '../actions/types';
const initialState = {
  list: [],
  item: '',
  edited: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO: {
      state.list = action.data;
      return { ...state };
    }
    case ADD_TODO:
      if (action.payload.title === '') {
        return state;
      } else {
        state.list = [...state.list, { ...action.payload }];
        return { ...state };
      }

    case REMOVE_TODO:
      state.list = [...state.list.filter((item) => item.id !== action.id)];
      return { ...state };
    case COMPLETE_TODO:
      state.list = [
        ...state.list.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        ),
      ];
      return { ...state };
    case CHANGE_TODO:
      return [
        ...state.list.map((item) =>
          item.id === action.id ? { ...item, edited: !item.edited } : item
        ),
      ];
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
