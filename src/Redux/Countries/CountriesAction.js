import axios from "axios";

export const getCountries = () => (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "https://restcountries.com/v3.1/all",
      })
        .then((res) => {
          dispatch(
            searchAllPostSuccess({ searchResults: res.data })
          );
        //   console.log(res);
          resolve(res.data);
        })
        .catch((err) => reject(err.message));
    });
  };

export const getCountriesByName = (Data) => (dispatch) => {
    const timestamp = Date.now();
    const startData = { searchText: Data, timestamp };
    dispatch(searchPostStart(startData));
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "https://restcountries.com/v3.1/name/"+Data,
      })
        .then((res) => {
          dispatch(
            searchPostSuccess({ searchResults: res.data, timestamp })
          );
        //   console.log(res);
          resolve(res.data);
        })
        .catch((err) => reject(err.message));
    });
  };

  const searchAllPostSuccess = (data) => {
    return {
      type: "SEARCH_All_POST_SUCCESS",
      array: data,
    };
  };

  const searchPostSuccess = (data) => {
    return {
      type: "SEARCH_POST_SUCCESS",
      array: data,
    };
  };
  
  const searchPostStart = (data) => {
    return {
      type: "SEARCH_POST_START",
      array: data,
    };
  };