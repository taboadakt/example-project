import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import IFlower from '../../types/Flower';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(3)
  }
}));

const Flowers = () => {
  const classes = useStyles();
  const {loading, data} = useQuery(gql`query GetFlowers {
      flowers {
          id
          name
      }
  }`);

  return (
    <Paper variant={"outlined"} className={classes.root}>
      <List>
        {!loading && data && Array.isArray(data.flowers) ? data.flowers.map( (flower: IFlower, idx: number) =>  (
          <ListItem key={`${idx}-flower`}>
            <ListItemText primary={flower.name} />
          </ListItem>)) : "Loading..."}
      </List>
    </Paper>
  );
};

export default Flowers;