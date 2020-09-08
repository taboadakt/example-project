import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Button,
  Dialog,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { gql, useMutation, useQuery } from "@apollo/client";
import IFamily from "../../types/Family";

const useStyles = makeStyles(({ spacing }) => ({
  content: {
    padding: spacing(3),
  },
}));

interface IAddFlowerDialog {
  open: boolean;
  onClose: () => void;
  onUpdate: () => void;
}

export const GET_FAMILIES_QUERY = gql`
  query GetFamilies {
    families {
      id
      name
    }
  }
`;

export const ADD_FLOWER_MUTATION = gql`
  mutation loadMyFlower($name: String!, $familyId: ID!) {
    createFlower(flower: { name: $name, familyId: $familyId }) {
      id
      name
    }
  }
`;

const AddFlowerDialog = ({ open, onClose, onUpdate }: IAddFlowerDialog) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const { loading, data } = useQuery(GET_FAMILIES_QUERY);
  const [addFlower] = useMutation(ADD_FLOWER_MUTATION);
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add Flower</DialogTitle>
      <div className={classes.content}>
        <Grid container spacing={3} alignContent={"center"}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={"Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            {loading ? (
              "loading.."
            ) : (
              <TextField
                fullWidth
                label={"Family"}
                select
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              >
                {data && Array.isArray(data.families)
                  ? data.families.map((family: IFamily, idx: number) => (
                      <MenuItem key={`${idx}-family`} value={String(family.id)}>
                        {family.name}
                      </MenuItem>
                    ))
                  : null}
              </TextField>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button
              variant={"contained"}
              fullWidth
              color={"secondary"}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant={"contained"}
              fullWidth
              color={"primary"}
              disabled={!name || !family}
              onClick={() => {
                addFlower({ variables: { name, familyId: family } })
                  .then((res) => {
                    setName("");
                    setFamily("");
                    onUpdate();
                    onClose();
                  })
                  .catch((error) => console.log(error));
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default AddFlowerDialog;
