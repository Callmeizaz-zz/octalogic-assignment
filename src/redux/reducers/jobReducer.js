const initState = {
  job: [],
  applicant: [],
};

const JobReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_JOB": {
      return {
        ...state,
        job: [...state.job, action.payload.job],
      };
    }
    case "ADD_APPLICANT": {
      return {
        ...state,
        applicant: [...state.applicant, action.payload.applicant],
      };
    }
    case "REMOVE_APPLICANT": {
      return {
        ...state,
        applicant: state.applicant.filter(
          (item) => item.userId !== action.payload.userID
        ),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default JobReducer;
