import ActionReducer from 'action-reducer';
import produce from 'immer';

const initialState = {
  openNavbar: false,
};
const { createAction, reducer } = ActionReducer(initialState);
export default reducer;

export const actions = {
  toggleNavbar: createAction('ui/toggleNavbar', (state) =>
    produce(state, (draft) => {
      draft.openNavbar = !draft.openNavbar;
    }),
  ),
};
