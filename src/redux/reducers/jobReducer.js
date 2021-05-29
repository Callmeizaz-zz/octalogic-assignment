const initState = {
  job: [],
};

const JobReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_JOB": {
      return {
        ...state,
        job: [...state.job, action.payload.job],
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
