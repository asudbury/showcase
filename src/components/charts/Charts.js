import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import makeStyles from '@mui/styles/makeStyles';
import BarChartsConfig from './BarChartsConfig';
import LineChartsConfig from './LineChartsConfig';
import PieChartsConfig from './PieChartsConfig';
import ChartsCategory from './ChartsCategory';

const useStyles = makeStyles({
  tab: {
    textTransform: 'none',
    fontSize: '12px',
    color: 'white'
  }
});

function Charts() {
  const classes = useStyles();
  const [value, setValue] = useState('line');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: 'aliceblue' }}>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab
              className={classes.tab}
              label="Line Charts"
              value="line"
              icon={<TimelineIcon fontSize="small" />}
            />
            <Tab
              className={classes.tab}
              label="Bar Charts"
              value="bar"
              icon={<BarChartIcon fontSize="small" />}
            />
            <Tab
              className={classes.tab}
              label="Pie Charts"
              value="pie"
              icon={<PieChartIcon fontSize="small" />}
            />
          </Tabs>
        </AppBar>
        <TabPanel value="line">
          <ChartsCategory chartsConfig={LineChartsConfig} />
        </TabPanel>
        <TabPanel value="bar">
          <ChartsCategory chartsConfig={BarChartsConfig} />
        </TabPanel>
        <TabPanel value="pie">
          <ChartsCategory chartsConfig={PieChartsConfig} />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Charts;
