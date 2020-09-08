import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { gql, useQuery } from '@apollo/client';
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import IFamily from '../../types/Family';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(3)
  }
}));

const Family = () => {
  const classes = useStyles();
  const {loading, data} = useQuery(gql`query GetFamilyAndFlowers {
      families {
          id
          name
          flowers {
              id
              name
          }
      }
  }`);

  return (
    <Paper variant={"outlined"} className={classes.root}>
      <List>
        {!loading && data && Array.isArray(data.families) ? data.families.map( (family: IFamily, idx: number) =>  (
          <ListItem key={`${idx}-flower`}>
            <ListItemText primary={family.name} />
          </ListItem>)) : "Loading..."}
      </List>
    </Paper>
  );
};

export default Family;