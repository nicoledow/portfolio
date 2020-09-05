import React from "react";
import { Typography } from "@material-ui/core";

function header() {
  return (
    <div>
      <Typography align="center" variant="h1" color="primary">
        Nicole Dow
      </Typography>

      <Typography align="center" variant="h4" color="secondary">
        Full stack developer. Teacher. Learner.
      </Typography>
    </div>
  );
}

export default header;
