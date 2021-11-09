const data = {
  series: [5, 3, 4]
};

const sum = (a, b) => a + b;

const PieChartSimple = {
  title: 'Pie Chart - Simple',
  type: 'Pie',
  data: {
    series: [5, 3, 4]
  },
  options: {
    labelInterpolationFnc(value) {
      return `${Math.round((value / data.series.reduce(sum)) * 100)}%`;
    }
  }
};

export default PieChartSimple;
