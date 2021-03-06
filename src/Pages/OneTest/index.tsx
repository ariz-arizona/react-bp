import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Alert } from "@material-ui/lab";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  withStyles,
} from "@material-ui/core";
import Image from "material-ui-image";

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

interface StylesProps {
  // injected style props
  classes: {
    root: string;
    media: string;
  };
}

type Props = RouteComponentProps<MatchParams> & StylesProps;

const styles = {
  root: {
    maxWidth: 1200,
  },
  media: {
    height: 0,
    paddingTop: "75%", // 4:3 - 1600x1200
  },
};

const OneTest = withStyles(styles)(
  class OneTest extends Component<Props, State> {
    state: Readonly<State> = {
      loading: false,
      title: "",
      fetchUrl: "",
      status: "error",
      data: "",
    };

    componentDidMount = () => {
      this.getLink();
    };

    componentDidUpdate = (prevProps: Props) => {
      if (this.props.match.params.link !== prevProps.match.params.link) {
        this.getLink();
      }
    };

    getLink = () => {
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
              data: ""
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
      const { classes } = this.props;
      const { loading, title, status, data } = this.state;
      const alertText = `Тест ${status === "success" ? "пройден" : "провален"}`;
      const alert = loading ? (
        <Alert severity="info">Тест в процессе</Alert>
      ) : (
        <Alert severity={status}>{alertText}</Alert>
      )

      if (!title) {
        return (
          <section className="content">
            <h1>Тест не найден</h1>
          </section>
        );
      }

      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Тест &laquo;{title}&raquo;
              </Typography>
              {alert}
            </CardContent>
            <Image aspectRatio={4 / 3} src={data} />
          </CardActionArea>
        </Card>
      );
    }
  }
);

export { OneTest };
