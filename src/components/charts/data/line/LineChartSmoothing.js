import Chartist from 'chartist';

const LineChartSmoothing = {
  title: 'Line Chart - Smoothing',
  type: 'Line',
  data: {
    labels: [1, 2, 3, 4, 5],
    series: [
      [1, 5, 10, 0, 1],
      [10, 15, 0, 1, 2]
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.simple({
      divisor: 2
    }),
    fullWidth: true,
    chartPadding: {
      right: 20
    },
    low: 0
  }
};

export default LineChartSmoothing;
