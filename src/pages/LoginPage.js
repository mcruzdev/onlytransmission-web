import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { authenticate } from "../services/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  errorMessage: {
    color: "#f50057"
  },
  loginContainer: {
    paddingTop: 64
  },
  menuButton: {
    marginRight: theme.spacing(3)
  }
}));

export default function LoginPage(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    user: "",
    password: "",
    error: "",
    canSubmit: false
  });

  const handleChangeUser = event => {
    let canDisableButton = !!(event.target.value && values.password);

    setValues({
      ...values,
      user: event.target.value,
      canSubmit: canDisableButton
    });
  };

  const handleChangePassword = event => {
    let canDisableButton = !!(event.target.value && values.user);

    setValues({
      ...values,
      password: event.target.value,
      canSubmit: canDisableButton
    });
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={() => props.history.push("/")}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Only Transmission</Typography>
        </Toolbar>
      </AppBar>

      <Container
        component="main"
        maxWidth="xs"
        className={classes.loginContainer}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Only Transmission
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Usuário"
              name="user"
              autoFocus
              onChange={handleChangeUser}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              onChange={handleChangePassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!values.canSubmit}
              onClick={async event => {
                event.preventDefault();
                const authenticated = await authenticate(values);

                if (authenticated) {
                  props.history.push("/adm");
                } else {
                  setValues({ ...values, error: "Usuário ou senha inválidos" });
                }
              }}
            >
              Acessar
            </Button>
          </form>
          {values.error && (
            <Typography component="label" color="secondary">
              {values.error}
            </Typography>
          )}
        </div>
      </Container>
    </>
  );
}
