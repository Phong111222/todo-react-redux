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
      // state.list = action.data;
      return { ...state, list: [...action.data] };
    }
    case ADD_TODO:
      if (state.edited) {
        return {
          ...state,
          list: [
            ...state.list.map((item) =>
              item.id === state.id
                ? { ...item, title: action.payload.title }
                : item
            ),
          ],
          edited: !state.edited,
        };
      } else {
        if (action.payload.title === '') {
          return;
        } else {
          state.list = [...state.list, { ...action.payload }];
          return { ...state };
        }
      }

    case REMOVE_TODO:
      return {
        ...state,
        list: [...state.list.filter((item) => item.id !== action.id)],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        list: [
          ...state.list.map((item) =>
            item.id === action.id
              ? { ...item, completed: !item.completed }
              : item
          ),
        ],
      };
    case CHANGE_TODO:
      return !state.edited
        ? {
            ...state,
            item: action.title,
            id: action.id,
            edited: !state.edited,
          }
        : { ...state };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
export default reducer;
