const PieChartCustomLabels = {
  title: 'Pie Chart - Custom Labels',
  type: 'Pie',
  data: {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
  },
  options: {
    labelInterpolationFnc(value) {
      return `My ${value}`;
    }
  }
};

export default PieChartCustomLabels;
