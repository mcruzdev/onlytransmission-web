import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import BodyNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BuildIcon from "@material-ui/icons/Build";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import ListIcon from "@material-ui/icons/List";
import { getAll } from "../services/transmission";
import openSocket from "socket.io-client";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  appBar: {
    width: "100%"
  },
  appBarFooter: {
    top: "auto",
    bottom: 0
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  hebreus138: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5)
  },
  card: {
    minWidth: 300,
    minHeight: 350
  },
  cardMedia: {
    widht: "100%",
    minHeight: 200,
    maxHeight: 100
  },
  cardContainer: {
    marginBottom: theme.spacing(8)
  }
}));

function HomePage(props) {
  const [transmissions, setTransmissions] = useState([]);
  
  const socket = openSocket("http://localhost:3333/");
  
  const { enqueueSnackbar } = useSnackbar();

  socket.on("live:on", transmission => {
    enqueueSnackbar(`O canal ${transmission.channelName} está online`, {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      variant: "info"
    });
  });

  async function getTransmissions() {
    const response = await getAll();
    setTransmissions(response.data.success);
  }

  useEffect(() => {
    getTransmissions();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* header */}
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="body1" noWrap>
            Only Transmission
          </Typography>
        </Toolbar>
      </AppBar>

      {/* main */}
      <Container maxWidth="lg" className={classes.main}>
        <Grid
          container
          item
          xs={12}
          sm={12}
          direction="column"
          justify="flex-start"
          className={classes.hebreus138}
        >
          <Typography variant="body1" align="center">
            Jesus Cristo é o mesmo, ontem, hoje e eternamente!
          </Typography>
          <Typography variant="body2" align="center">
            Hebreus 13:8
          </Typography>
        </Grid>

        {/* Cards */}
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.cardContainer}
        >
          {transmissions.map(transmission => (
            <Card key={transmission._id} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  alt={transmission.sponsor}
                  height="800"
                  image={`https://img.youtube.com/vi/${transmission.videoId}/0.jpg`}
                  title="Pr. Joaquim Gonçalves Silva"
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${transmission.state} - ${transmission.city}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {transmission.sponsor}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() =>
                    props.history.push({
                      pathname: "/live",
                      state: { live_id: transmission.videoId }
                    })
                  }
                >
                  Assistir
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>

      {/* footer */}
      <AppBar
        className={classes.appBarFooter}
        position="fixed"
        color="secondary"
      >
        <Grid item xs={12} sm={12}>
          <BodyNavigation>
            <BottomNavigationAction
              icon={<EventSeatIcon />}
              onClick={() => props.history.push("/")}
            />
            <BottomNavigationAction disabled icon={<ListIcon />} />
            <BottomNavigationAction
              icon={<BuildIcon />}
              onClick={() => props.history.push("/access")}
            />
          </BodyNavigation>
        </Grid>
      </AppBar>
    </div>
  );
}

export default HomePage;
