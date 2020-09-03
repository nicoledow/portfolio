import React from "react";
import { GridList, GridListTile, Typography } from "@material-ui/core";

function guidebar() {
  const sections = [
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <GridList spacing={4} cols={2.5}>
      {sections.map((s) => {
        return (
          <GridListTile key={`${s.title}-tile`}>
            <Typography>{s.title}</Typography>
          </GridListTile>
        );
      })}
    </GridList>
  );
}

export default guidebar;
