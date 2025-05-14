import { initialState } from '@app-dtw/core/store/state';

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
