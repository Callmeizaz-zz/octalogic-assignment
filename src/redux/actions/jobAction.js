const addJob = (data) => (dispatch) => {
  dispatch({
    type: "ADD_JOB",
    payload: {
      job: data,
    },
  });
};

const addApplicant = (data) => (dispatch) => {
  dispatch({
    type: "ADD_APPLICANT",
    payload: {
      applicant: data,
    },
  });
};
const removeApplicant = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_APPLICANT",
    payload: {
      userID: id,
    },
  });
};

export { addApplicant, addJob, removeApplicant };
