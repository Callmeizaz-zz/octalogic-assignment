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

export { addApplicant, addJob };
