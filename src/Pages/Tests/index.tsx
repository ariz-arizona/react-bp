import React, { Component } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

import { tests } from "Tests/tests";

import { TestsRow } from "./row";

type State = {};
interface StylesProps {
  // injected style props
  classes: {
    table: string;
  };
}

type Props = StylesProps;

const styles = {
  table: {
  },
};

const Tests = withStyles(styles)(
  class Tests extends Component<Props, State> {
    state: Readonly<State> = {};

    render() {
      const { classes } = this.props;

      return (
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell>Действия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tests.map((test, j) => (
                <TestsRow  key={j} {...test}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
  }
);

export { Tests };
