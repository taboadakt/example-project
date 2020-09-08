import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Paper, Typography, Tabs, Tab } from "@material-ui/core";
import Flowers from "../flowers/Flowers";
import Family from "../family/Family";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(3),
  },
  content: {
    paddingTop: spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  const [tabIdx, setTabIdx] = useState(0);

  return (
    <Paper className={classes.root}>
      <Typography variant={"h4"} align={"center"}>
        Flowers
      </Typography>
      <div className={classes.content}>
        <Tabs
          value={tabIdx}
          onChange={(event, newValue) => setTabIdx(newValue)}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Flowers" />
          <Tab label="Family" />
        </Tabs>
        <div hidden={tabIdx !== 0}>
          <Flowers />
        </div>
        <div hidden={tabIdx !== 1}>
          <Family />
        </div>
      </div>
    </Paper>
  );
};

export default Home;
