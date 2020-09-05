import React from "react";
import {
  GridList,
  GridListTile,
  Typography,
  Container,
} from "@material-ui/core";

function guidebar() {

  const sections = [
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "https://medium.com/@ndow_11367" },
  ];

  return (
    <Container>
      <GridList spacing={4} cols={sections.length}>
        {sections.map((s) => {
          return (
            <GridListTile key={`${s.title}-tile`}>
              <a href={s.link} target="_new" style={ { textDecoration: 'none' } }>
                <Typography color="secondary" variant="h6">
                    {s.title}
                </Typography>
              </a>
            </GridListTile>
          );
        })}
      </GridList>
    </Container>
  );
}

export default guidebar;
