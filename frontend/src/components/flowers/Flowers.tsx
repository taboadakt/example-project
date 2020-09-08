import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import IFlower from "../../types/Flower";
import AddFlowerDialog from "./AddFlowerDialog";
import { LocalFlorist } from "@material-ui/icons";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(3),
  },
}));

export const GET_FLOWERS_QUERY = gql`
  query GetFlowers {
    flowers {
      id
      name
    }
  }
`;

const Flowers = () => {
  const classes = useStyles();
  const { loading, data, refetch } = useQuery(GET_FLOWERS_QUERY);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <Paper variant={"outlined"} className={classes.root}>
      <List>
        {!loading && data && Array.isArray(data.flowers)
          ? data.flowers.map((flower: IFlower, idx: number) => (
              <ListItem key={`${idx}-flower`}>
                <ListItemIcon>
                  <LocalFlorist />
                </ListItemIcon>
                <ListItemText primary={flower.name} />
              </ListItem>
            ))
          : "Loading..."}
        <ListItem>
          <Button
            variant={"contained"}
            onClick={() => setIsAddDialogOpen(true)}
          >
            Add Flower
          </Button>
        </ListItem>
      </List>
      <AddFlowerDialog
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onUpdate={() => refetch()}
      />
    </Paper>
  );
};

export default Flowers;
