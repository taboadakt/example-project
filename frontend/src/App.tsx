import React from "react";
import "fontsource-roboto";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/home/Home";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_DOMAIN,
  cache: new InMemoryCache(),
});

const useStyles = makeStyles(({ spacing }) => ({
  content: {
    maxWidth: 900,
    marginTop: spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <div className={classes.content}>
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
