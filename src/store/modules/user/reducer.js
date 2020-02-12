import produce from 'immer';

export default function user(state = [], action) {
  switch (action.type) {
    case 'LIST_USER':
      return [action.user];
    case 'REMOVE_USER':
      return [action.user];
    case 'ADD_USER':
      return produce(state[0], draft => {
        draft.push(action.user);
      });

    default:
      return state;
  }
}
