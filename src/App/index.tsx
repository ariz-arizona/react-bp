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

import { tests } from "../Tests/tests";
import { Tests } from "Pages/Tests";

const drawerWidth = 240;

const useStyles = makeStyles(
  (theme: Theme) =>
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
    }),
  { index: 1 }
);

export function App() {
  const classes = useStyles();

  const routes: Array<JSX.Element> = [];
  Pages.map((page, index) =>
    routes.push(
      <Route
        exact
        path={page.link}
        component={page.component}
        key={`page-${index}`}
      />
    )
  );
  routes.push(<Route exact path="/tests/:link" component={Tests} key="test" />);

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
            {Pages.map((page, i) => (
              <>
                <ListItem button component={Link} to={page.link} key={i}>
                  <ListItemText>{page.title}</ListItemText>
                </ListItem>
                {page.link === "/tests" ? (
                  <List component="div" disablePadding>
                    {tests.map((test, j) => (
                      <ListItem
                        button
                        component={Link}
                        to={`${page.link}/${test.link}`}
                        key={j}
                      >
                        <ListItemText>{test.title}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                ) : null}
              </>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>{routes}</Switch>
        </main>
      </div>
    </>
  );
}
