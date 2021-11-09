import Chartist from 'chartist';

const LineChartSeriesOverrides = {
  title: 'Line Chart - Series Overrides',
  type: 'Line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    series: [
      {
        name: 'series-1',
        data: [5, 2, -4, 2, 0, -2, 5, -3]
      },
      {
        name: 'series-2',
        data: [4, 3, 5, 3, 1, 3, 6, 4]
      },
      {
        name: 'series-3',
        data: [2, 4, 3, 1, 4, 5, 3, 2]
      }
    ]
  },
  options: {
    fullWidth: true,
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.step()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.simple(),
        showArea: true
      },
      'series-3': {
        showPoint: false
      }
    }
  }
};

export default LineChartSeriesOverrides;
