import React, { Component } from "react";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import { Replay } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

import { TestInterface } from "Tests/tests";
import { Link } from "react-router-dom";

type Props = TestInterface;
type State = {
  starting: boolean;
  loading: boolean;
  status: "error" | "success";
};

export class TestsRow extends Component<Props, State> {
  state: Readonly<State> = {
    starting: false,
    loading: false,
    status: "error",
  };

  startTest = () => {
    const { apiLink } = this.props;
    this.setState({ starting: true, loading: true });

    fetch(`/api/test/${apiLink}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          loading: false,
          status: data.result.status,
        });
      });
  };

  render() {
    const { link, title } = this.props;
    const { starting, loading, status } = this.state;

    let alert;
    if (!starting) {
      alert = <Alert severity="warning">Тест не запущен</Alert>;
    } else {
      const alertText = `Тест ${status === "success" ? "пройден" : "провален"}`;
      alert = loading ? (
        <Alert severity="info">Тест в процессе</Alert>
      ) : (
        <Alert severity={status}>{alertText}</Alert>
      );
    }

    return (
      <TableRow>
        <TableCell>
          <Link to={`/tests/${link}`}>{title}</Link>
        </TableCell>
        <TableCell>{alert}</TableCell>
        <TableCell>
          <IconButton onClick={this.startTest} disabled={loading}>
            <Replay />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}
