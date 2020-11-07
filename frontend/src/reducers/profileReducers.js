import {
  PROFILE_LOAD_REQUEST,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAIL,
} from "../constants/profileConstants";

export const profileLoadReducer = (state = { profile: {} }, action) => {
  switch (action.type) {
    case PROFILE_LOAD_REQUEST:
      return { ...state, loading: true };
    case PROFILE_LOAD_SUCCESS:
      return { loading: false, profile: action.payload };
    case PROFILE_LOAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
