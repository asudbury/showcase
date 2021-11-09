import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
  Typography
} from '@mui/material';

interface ListItemLinkProps {
  url: string;
  text: string;
  icon: SvgIconProps;
}

export default function ListItemLink({
  url,
  text,
  icon
}: ListItemLinkProps): JSX.Element {
  return (
    <ListItem button component="a" href={url}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={<Typography variant="caption">{text}</Typography>}
      />
    </ListItem>
  );
}
