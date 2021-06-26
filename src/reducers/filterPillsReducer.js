const init = {
  pillList: [],
};

export default function filterPillsReducer(state = init, action) {
  switch (action.type) {
    case 'UPDATE_PILLS':
      return {
        ...state,
        pillList: action.payload,
      };
    default:
      return state;
  }
}
