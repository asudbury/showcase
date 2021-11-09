const PieChartGauge = {
  title: 'Pie Chart - Gauge',
  type: 'Pie',
  data: {
    series: [20, 10, 30, 40]
  },
  options: {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
  }
};

export default PieChartGauge;
