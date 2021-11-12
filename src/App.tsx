/* eslint-disable react/jsx-no-bind */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Drawer,
  List,
  StyledEngineProvider,
  SvgIconTypeMap
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Routes from './routes';
import ListItemLink from './components/core/listItemLink';
import MenuLinks from './menuLinks';

const drawerWidth = 240;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1
    }
  })
);

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer className={classes.drawer} variant="permanent" anchor="left">
          <div className={classes.drawer}>
            <List dense disablePadding>
              {MenuLinks().map(
                (item: {
                  url: string;
                  text: string;
                  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
                }) => (
                  <ListItemLink
                    key={item.url}
                    url={item.url}
                    text={item.text}
                    icon={<item.icon fontSize="small" />}
                  />
                )
              )}
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Routes />
        </main>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
