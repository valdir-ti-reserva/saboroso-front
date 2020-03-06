import produce from 'immer';

export default function menu(state = [], action) {
  switch (action.type) {
    case '@menu/LIST':
      return action.menu;
    case '@menu/REMOVE':
      return produce(state, draft => {
        const itemIndex = draft.findIndex(item => item.id === action.id);
        if (itemIndex >= 0) {
          draft.splice(itemIndex, 1);
        }
      });
    case '@menu/ADD':
      return produce(state, draft => {
        draft.push(action.menu);
      });
    default:
      return state;
  }
}
