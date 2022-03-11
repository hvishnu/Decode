import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import _ from "lodash";
import CountriesCard from "./CountriesCard";
import { getCountries } from "../../Redux/Countries/CountriesAction";
import { getCountriesByName } from "../../Redux/Countries/CountriesAction";
import { Grid } from "@mui/material";

export const Countries = (props) => {
  const [searchName, setSearchName] = React.useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  const onSearchText = (e) => {
    props.getCountriesByName(e.searchName);
  };

  useEffect(() => {
    props.getCountries();
  }, []);

  const handleInputChange = (e) => {
    inputRef.current({ searchName: e.target.value });
    setSearchName(e.target.value);
  };

  return (
    <div>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Search Countries"
          id="outlined-required"
          style={{ margin: "10px" }}
          onChange={(e) => handleInputChange(e)}
        />
      </Box>
      <Grid container spacing={2}>
        {props?.countriesList?.map((item, index) => (
          <CountriesCard country={item} />
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countriesList: state.countriesList.countriesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountriesByName: (name) => dispatch(getCountriesByName(name)),
    getCountries: () => dispatch(getCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
