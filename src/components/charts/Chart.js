import React from 'react';
import { object } from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChartistGraph from 'react-chartist';
import Typography from '@mui/material/Typography';
import './chartist.css';

function Chart(props) {
  const { chart } = props;
  return (
    <Card variant="elevation">
      <CardContent>
        <ChartistGraph
          className="ct-chart ct-major-sixth"
          type={chart.type}
          data={chart.data}
          options={chart.options}
          listener={chart.listener}
        />
        <Typography
          color="textSecondary"
          align="center"
          variant="body2"
          gutterBottom
        >
          {chart.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

Chart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  chart: object.isRequired
};

export default Chart;
