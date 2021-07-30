import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function Header() {
  const { header, logo } = useStyles();
  const title = (
    <Typography variant="h6" component="h1" className={logo}>
      ToDo-List
    </Typography>
  );
  const displayDesktop = () => {
    return <Toolbar>{title}</Toolbar>;
  };
  return (
    <div data-testid="component-header">
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </div>
  );
}
