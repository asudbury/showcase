const BarChartLabelPlacement = {
  title: 'Bar Chart - Label Placement',
  type: 'Bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  },
  options: {
    axisX: {
      position: 'start'
    },
    axisY: {
      position: 'end'
    }
  }
};

export default BarChartLabelPlacement;
