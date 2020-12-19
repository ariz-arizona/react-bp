import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Pages } from "Pages/Routes";
import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  createStyles,
  Theme,
  makeStyles,
  Toolbar,
} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
  })
);

export function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>Тестовый сайт с MaterialUI</Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <List>
          {Pages.map((page, index) => (
            <ListItem button component={Link} to={page.link} key={index}>
              <ListItemText>
                {page.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {Pages.map((page, index) => (
            <Route
              exact
              path={page.link}
              component={page.component}
              key={index}
            />
          ))}
        </Switch>
      </main>
    </div>
  );
}
