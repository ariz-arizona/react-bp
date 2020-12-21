import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Alert } from "@material-ui/lab";
import { Backdrop, CircularProgress, Paper } from "@material-ui/core";

import { tests } from "Tests/tests";

type State = {
  loading: boolean;
  title: string;
  fetchUrl: string;
  status: "error" | "success";
  data: string;
};
interface MatchParams {
  link: string;
}

type Props = RouteComponentProps<MatchParams>;
export class Tests extends Component<Props, State> {
  state: Readonly<State> = {
    loading: false,
    title: "",
    fetchUrl: "",
    status: "error",
    data: "",
  };

  componentDidMount = () => {
    const { match } = this.props;
    const { link } = match.params;
    if (link) {
      const test = tests.find((el) => el.link === link);
      if (test) {
        this.setState(
          {
            loading: true,
            title: test.title,
            fetchUrl: `/api/test/${test.apiLink}`,
          },
          this.getData
        );
      }
    }
  };

  getData = () => {
    fetch(this.state.fetchUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          loading: false,
          status: data.result.status,
          data: data.result.data,
        });
      });
  };

  render() {
    const { loading, title, status, data } = this.state;
    const AlertText = `Тест ${status === "success" ? "пройден" : "провален"}`;

    if (!title) {
      return (
        <section className="content">
          <h1>Тест не найден</h1>
        </section>
      );
    }

    if (loading) {
      return (
        <section className="content">
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </section>
      );
    }

    return (
      <section className="content">
        <h1>Тест &laquo;{title}&raquo;</h1>

        {loading && (
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}

        <Alert severity={status}>{AlertText}</Alert>
        <Paper>
          <img src={data} />
        </Paper>
      </section>
    );
  }
}
