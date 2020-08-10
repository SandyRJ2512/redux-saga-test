import { GET_USER_LIST_PENDING, GET_USER_LIST_SUCCESS, GET_USER_LIST_ERROR, GET_USER_EDIT_LIST_SUCCESS, GET_USER_SEARCH_LIST_SUCCESS } from '../Action/action';

const initialState = {
  data: [],
  filteredData: [],
  pending: false,
  error: null
}

const UserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.data,
      }
    case GET_USER_LIST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case GET_USER_EDIT_LIST_SUCCESS:
      const {selectedIndex, title, body } = action.data;
      const data = [...state.data];
      data[selectedIndex].title = title;
      data[selectedIndex].body = body;
      return {
        ...state,
        data
      }
    case GET_USER_SEARCH_LIST_SUCCESS:
      let searchText = action.data;
      let searchResult = state.data.filter( mainList =>
        mainList.title.toLowerCase().includes(searchText.toLowerCase())
      );

      if(searchText && !searchResult.length) searchResult = [{body: "Data Not found"}];

      return {
        ...state,
        filteredData: searchResult
      }

    default:
      return state;
  }
}

export const getUserListData = state => state.UserListReducer.data;
export const getUserListDataPending = state => state.UserListReducer.pending;
export const getUserListDataError = state => state.UserListReducer.error;
export const getUserListFilteredData = state => state.UserListReducer.filteredData;
export default UserListReducer;