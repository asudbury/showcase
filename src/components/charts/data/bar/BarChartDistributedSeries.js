const BarChartDistributedSeries = {
  title: 'Bar Chart - Distributed Series',
  type: 'Bar',
  data: {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    series: [20, 60, 120, 200, 180, 20, 10]
  },
  options: {
    distributeSeries: true
  }
};

export default BarChartDistributedSeries;
