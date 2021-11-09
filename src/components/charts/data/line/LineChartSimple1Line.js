const LineChartSimple1Line = {
  title: 'Cases processed per day',
  type: 'Line',
  data: {
    labels: [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th'
    ],
    series: [[10, 20, 30, 40, 70, 110, 60, 40, 10, 90, 20]]
  },
  options: {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  }
};

export default LineChartSimple1Line;
