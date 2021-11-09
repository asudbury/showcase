import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Rocket } from './types';

interface LaunchRocketProps {
  rocket: Rocket;
}

export default function LaunchRocket({
  rocket
}: LaunchRocketProps): JSX.Element {
  return (
    <div data-testid="launchRocket">
      <List>
        <ListItem>
          <ListItemText primary="Rocket Name" secondary={rocket.rocket_name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Rocket Type" secondary={rocket.rocket_type} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Manufacturer"
            secondary={rocket.second_stage.payloads[0].manufacturer}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Serial Number"
            secondary={rocket.first_stage.cores[0].core_serial}
          />
        </ListItem>
      </List>
    </div>
  );
}
