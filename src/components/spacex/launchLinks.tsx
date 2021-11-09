import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import makeStyles from '@mui/styles/makeStyles';
import { Links } from './types';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'underline'
  }
}));

interface LaunchLinksProps {
  links: Links;
}

export default function LaunchLinks({ links }: LaunchLinksProps): JSX.Element {
  const classes = useStyles();

  return (
    <div data-testid="launchLinks">
      <List>
        <ListItem>
          <ListItemText primary="Article" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={links.article_link}
          className={classes.link}
        >
          <ListItemText primary={links.article_link} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Wikipedia" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={links.wikipedia}
          className={classes.link}
        >
          <ListItemText primary={links.wikipedia} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Video" />
        </ListItem>
        <ListItem
          button
          component="a"
          href={links.video_link}
          className={classes.link}
        >
          <ListItemText primary={links.video_link} />
        </ListItem>
      </List>
    </div>
  );
}
