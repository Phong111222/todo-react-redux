import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, RESET } from '../actions/types';
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload }];
    case REMOVE_TODO:
      return [...state.filter((item) => item.id !== action.id)];
    case COMPLETE_TODO:
      return [
        ...state.map((item) =>
          item.id == action.id
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      ];
    case RESET:
      return [];
    default:
      return state;
  }
};
export default reducer;
