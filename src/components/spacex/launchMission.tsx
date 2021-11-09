import React from 'react';
import List from '@mui/material/List';
import { format } from 'date-fns';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Launch } from './types';

interface LaunchMissionProps {
  launch: Launch;
}

export default function LaunchMission({
  launch
}: LaunchMissionProps): JSX.Element {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary="Flight Number"
            secondary={launch.flight_number}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Mission Name"
            secondary={launch.mission_name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Launch Date"
            secondary={format(
              new Date(launch.launch_date_utc),
              'dd-MMM-yyyy HH:mm:ss'
            )}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Launch Site"
            secondary={launch.launch_site.site_name_long}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="" secondary={launch.details} />
        </ListItem>
      </List>
      <img src={launch.links.mission_patch_small} alt="mission" />
    </div>
  );
}
