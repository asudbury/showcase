const times = (n) =>
  // eslint-disable-next-line prefer-spread
  Array.apply(null, new Array(n));
const data = times(52)
  .map(Math.random)
  .reduce(
    (d, rnd, index) => {
      d.labels.push(index + 1);
      d.series.forEach((series) => {
        series.push(Math.random() * 100);
      });

      return d;
    },
    {
      labels: [],
      series: times(4).map(() => [])
    }
  );

const LineChartScatter = {
  title: 'Line Chart - Scatter',
  type: 'Line',
  data,
  options: {
    showLine: false,
    axisX: {
      labelInterpolationFnc(value, index) {
        return index % 13 === 0 ? `W${value}` : null;
      }
    }
  }
};

export default LineChartScatter;
