export const FETCH_USER_LIST_DATA = 'FETCH_USER_LIST_DATA';
export const GET_USER_LIST_PENDING = 'GET_USER_LIST';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_ERROR = 'GET_USER_LIST_ERROR';
export const GET_USER_EDIT_LIST_SUCCESS = 'GET_USER_EDIT_LIST_SUCCESS';
export const GET_USER_SEARCH_LIST_SUCCESS = "GET_USER_SEARCH_LIST_SUCCESS";

export const getUserListPending = () => {
  return {
    type: GET_USER_LIST_PENDING
  }
}

export const getUserListSuccess = (data) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    data
  }
}

export const getUserListError = () => {
  return {
    type: GET_USER_LIST_ERROR
  }
}

export const testAction = () => {
  return { type: FETCH_USER_LIST_DATA }
}

// Used to Edit/ Update selected data
export const getUserEditList = (data) => {
  return { type: GET_USER_EDIT_LIST_SUCCESS, data }
}

// Used to filter list from title
export const getUserSearchList = (data) => {
  return { type: GET_USER_SEARCH_LIST_SUCCESS, data }
}