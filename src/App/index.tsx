import React from "react";
import { Link, Switch, Route } from "react-router-dom";

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
  Typography,
  CssBaseline,
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
      padding: theme.spacing(3),
    },
  })
);

export function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">Тестовый сайт с MaterialUI</Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Toolbar>
            <Typography variant="h6">Роутер</Typography>
          </Toolbar>
          <Divider />
          <List>
            {Pages.map((page, index) => (
              <ListItem button component={Link} to={page.link} key={index}>
                <ListItemText>{page.title}</ListItemText>
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
    </>
  );
}
