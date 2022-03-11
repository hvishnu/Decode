const initialState = {
    countriesList: [],
    timestamp: undefined,
    isSearching: false,
  };
  
  function actionIsValid(state, data) {
    return data.timestamp >= state.timestamp;
  }
  
  const CountriesReducer = (state = initialState, action) => {
    var newState = { ...state };
    switch (action.type) {

      case "SEARCH_All_POST_SUCCESS":
          newState={
              ...state,
              countriesList:action.array.searchResults
          };
          break;
      case "SEARCH_POST_START":
        newState = {
          ...state,
          // usersOfSchool: action.array.searchResults,
          timestamp: action.array.timestamp,
          isSearching: true,
        };
        break;
      case "SEARCH_POST_SUCCESS": {
        if (actionIsValid(state, action.array)) {
          newState = {
            ...state,
            countriesList: action.array.searchResults,
            timestamp: action.array.timestamp,
            isSearching: false,
          };
        }
        break;
      }
    }
    return newState;
  };
  
  export default CountriesReducer;