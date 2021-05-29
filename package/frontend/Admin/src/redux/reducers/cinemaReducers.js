import * as actionTypes from "../constants/adminConstants";

export const getCinemaReducer = (state = { cinema: [] }, action) => {

  switch (action.type) {
    case actionTypes.GET_CINEMA_REQUEST:
      return {
        loading: true,
        cinema: [],
      };
    case actionTypes.GET_CINEMA_SUCCESS:
    
      return {
        cinema: action.payload,
        loading: false,
      };
    case actionTypes.GET_CINEMA_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const getScheduleReducer = (state = { schedule: [] }, action) => {

  switch (action.type) {
    case actionTypes.GET_SCHEDULE_REQUEST:
      return {
        loading: true,
        schedule: [],
      };
    case actionTypes.GET_SCHEDULE_SUCCESS:
    
      return {
        schedule: action.payload,
        loading: false,
      };
    case actionTypes.GET_SCHEDULE_FAIL:
      return {
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// export const getStatiscalReducer = (state = { statiscal: [] }, action) => {

//   switch (action.type) {
//     case actionTypes.GET_SCHEDULE_REQUEST:
//       return {
//         loading: true,
//         statiscal: [],
//       };
//     case actionTypes.GET_SCHEDULE_SUCCESS:
    
//       return {
//         statiscal: action.payload,
//         loading: false,
//       };
//     case actionTypes.GET_SCHEDULE_FAIL:
//       return {
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

