import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {gql, useQuery} from "@apollo/client";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { ExpandMore, ExpandLess, LocalFlorist } from "@material-ui/icons";
import IFamily from "../../types/Family";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(3),
  },
}));

export const GET_FAMILIES_QUERY = gql`
  query GetFamilyAndFlowers {
    families {
      id
      name
      flowers {
        id
        name
      }
    }
  }
`;

const Family = () => {
  const classes = useStyles();
  const { loading, data } = useQuery(GET_FAMILIES_QUERY);
  const [expandedList, setExpandedList] = useState<boolean[]>([]);

  useEffect(() => {
    if (data && data.families) {
      setExpandedList(data.families.map(() => false));
    }
  }, [data]);

  const toggleExpanded = (idx: number) => {
    const newExpandedArray = [
      ...expandedList.slice(0, idx),
      !expandedList[idx],
      ...expandedList.slice(idx + 1),
    ];
    setExpandedList(newExpandedArray);
  };

  return (
    <Paper variant={"outlined"} className={classes.root}>
      <List>
        {!loading && data && Array.isArray(data.families)
          ? data.families.map((family: IFamily, idx: number) => (
              <React.Fragment key={`${idx}-family`}>
                <ListItem button onClick={() => toggleExpanded(idx)}>
                  <ListItemText primary={family.name} />
                  {expandedList[idx] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandedList[idx]} timeout={"auto"} unmountOnExit>
                  <List component={"div"} disablePadding>
                    {Array.isArray(family.flowers)
                      ? family.flowers.map((flower, flowerIdx) => (
                          <ListItem key={`${flowerIdx}-${idx}-family-flower`}>
                            <ListItemIcon>
                              <LocalFlorist />
                            </ListItemIcon>
                            <ListItemText primary={flower.name} />
                          </ListItem>
                        ))
                      : null}
                  </List>
                </Collapse>
              </React.Fragment>
            ))
          : "Loading..."}
      </List>
    </Paper>
  );
};

export default Family;
