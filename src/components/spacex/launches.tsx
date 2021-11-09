import React from 'react';
import MaterialTable from 'material-table';
import makeStyles from '@mui/styles/makeStyles';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { useGetLaunchesQuery } from '../../redux/spaceXApi';
import TableIcons from '../core/tableIcons';
import { Launch } from './types';

const useStyles = makeStyles(() => ({
  nowrap: {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'auto'
  }
}));

export default function Launches(): JSX.Element {
  const classes = useStyles();
  const history = useHistory();
  const { data, error, isLoading } = useGetLaunchesQuery('');

  let dataView = [];

  function handleSelectedRow(selectedRow: Launch | undefined) {
    if (selectedRow) {
      const url = `spacex/launch/${selectedRow.flight_number}`;
      history.push(url);
    }
  }

  if (isLoading) return <div>....loading</div>;
  if (error) return <div>error!</div>;
  if (data) {
    dataView = data
      .slice(0)
      .reverse()
      .map((o: any) => ({ ...o }));
    return (
      <div data-testid="launches">
        <MaterialTable
          title=""
          icons={TableIcons}
          data={dataView}
          onRowClick={(evt, selectedRow) => handleSelectedRow(selectedRow)}
          columns={[
            {
              title: 'Flight',
              field: 'flight_number',
              width: '15%',
              render: (rowData, type) => {
                if (type === 'row') {
                  return (
                    <div className={classes.nowrap}>
                      <FlightTakeoffIcon fontSize="small" color="primary" />
                      {rowData.flight_number}
                    </div>
                  );
                }
                return rowData;
              }
            },
            {
              title: 'Mission',
              field: 'mission_name',
              width: '15%'
            },
            {
              title: 'Launch Date',
              field: 'launch_date_utc',
              render: (rowData, type) => {
                if (type === 'row') {
                  return (
                    <div className={classes.nowrap}>
                      {format(
                        new Date(rowData.launch_date_utc),
                        'dd-MMM-yyyy HH:mm:ss'
                      )}
                    </div>
                  );
                }
                return rowData;
              }
            },
            {
              title: 'Details',
              field: 'details',
              render: (rowData, type) => {
                if (type === 'row') {
                  return (
                    <div>
                      <p>{rowData.details}</p>
                    </div>
                  );
                }
                return rowData;
              }
            }
          ]}
          options={{
            padding: 'dense',
            pageSize: 10,
            exportButton: true,
            filtering: true
          }}
        />
      </div>
    );
  }
  return <div />;
}
