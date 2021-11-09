const BarChartOverlappingBars = {
  title: 'Bar Chart - Overlapping Bars',
  type: 'Bar',
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  },
  options: {
    seriesBarDistance: 10
  }
};

export default BarChartOverlappingBars;
