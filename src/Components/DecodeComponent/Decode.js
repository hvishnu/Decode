import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import _ from "lodash";
import { Button, Typography } from "@mui/material";

export const Decode = (props) => {
  const [decodeNumber, SetDecodeNumber] = React.useState();
  const [ans, setAns] = React.useState("");

  const checkDecodeNumber = () => {
    if (decodeNumber <= 0) {
      setAns("Not a Decode number");
    } else if (
      decodeNumber % 2 == 0 ||
      decodeNumber % 3 == 0 ||
      decodeNumber % 5 == 0
    ) {
      setAns("Decode Number");
    } else {
      setAns("Not a Decode number");
    }
  };

  return (
    <div>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          id="outlined-required"
          type="number"
          style={{ margin: "10px" }}
          onChange={(e) => SetDecodeNumber(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={checkDecodeNumber}
          style={{ margin: "10px" }}
        >
          Decode
        </Button>
      </Box>

      <Typography variant="h1" component="h2">
        {ans}
      </Typography>
    </div>
  );
};
