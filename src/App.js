import React from "react";
import { SnackbarProvider } from "notistack";

import Routes from "./routes";

const App = () => (
  <SnackbarProvider>
    <Routes />
  </SnackbarProvider>
);

export default App;
