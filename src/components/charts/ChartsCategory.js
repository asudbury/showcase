import React from 'react';
import { array } from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import Chart from './Chart';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const ChartsCategory = (props) => {
  const classes = useStyles();

  const { chartsConfig } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {chartsConfig.map((chart) => (
          <Grid item xs={12} md={6} key={chart.title}>
            <Chart chart={chart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

ChartsCategory.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  chartsConfig: array.isRequired
};

export default ChartsCategory;
