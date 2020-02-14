import produce from 'immer';

export default function user(state = [], action) {
  switch (action.type) {
    case '@user/LIST':
      return action.user;
    case '@user/REMOVE':
      return produce(state, draft => {
        const itemIndex = draft.findIndex(item => item.id === action.id);
        if (itemIndex >= 0) {
          draft.splice(itemIndex, 1);
        }
      });
    case '@user/ADD':
      return produce(state, draft => {
        draft.push(action.user);
      });
    default:
      return state;
  }
}
