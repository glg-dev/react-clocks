import { createStore } from 'redux';

// State
const initialState = {
  theme: 'neon-blue',
};

// Actions creators
export const changeTheme = (e) => ({
  type: "changeTheme",
  payload: e, 
});

function reducer(state = initialState, action) {
  if (action.type === "changeTheme") {
    const e = action.payload;
    console.log(e);
    return {
      ...state,
      theme: e,
    }
  }
  return state;
}

export const store = createStore(reducer, initialState);