import produce from 'immer';

export default function user(state = [], action) {
  switch (action.type) {
    case 'LIST_USER':
      return action.user;
    case 'REMOVE_USER':
      return produce(state, draft => {
        const itemIndex = draft.findIndex(item => item.id === action.id);
        if (itemIndex >= 0) {
          draft.splice(itemIndex, 1);
        }
      });
    // return action.user;
    case 'ADD_USER':
      return produce(state, draft => {
        draft.push(action.user);
      });

    default:
      return state;
  }
}
