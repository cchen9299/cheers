const dispatchPills = (pillList) => (dispatch) => {
  dispatch({
    type: 'UPDATE_PILLS',
    payload: pillList,
  });
};

export default dispatchPills;
