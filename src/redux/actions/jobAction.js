const addJob = (data) => (dispatch) => {
  dispatch({
    type: "ADD_JOB",
    payload: {
      job: data,
    },
  });
};

export default addJob;
