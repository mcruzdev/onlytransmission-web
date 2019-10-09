import React from "react";
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

import "./index.css";
import "typeface-roboto";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: 15
  },
  media: {
    height: 95
  },
  margin: {
    marginTop: 60
  }
});

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div style={{ padding: 20, margin: 20 }}>
        <Grid container direction="column" justify="flex-start">
          <Typography variant="h3">
            Jesus Cristo é o mesmo, ontem, hoje e eternamente!
          </Typography>
          <Typography variant="subtitle1">Hebreus 13:8</Typography>
        </Grid>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography variant="h4" align="center">
          Transmissões AO VIVO
        </Typography>
      </div>
      <div>
        <Grid container direction="row" justify="space-evenly">
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Assistir
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Assistir
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Assistir
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
