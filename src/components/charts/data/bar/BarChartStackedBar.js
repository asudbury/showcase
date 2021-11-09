const BarChartStackedBar = {
  title: 'Bar Chart - Stacked Bar',
  type: 'Bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [800000, 1200000, 1400000, 1300000],
      [200000, 400000, 500000, 300000],
      [100000, 200000, 400000, 600000]
    ]
  },
  options: {
    stackBars: true,
    axisY: {
      labelInterpolationFnc(value) {
        return `${value / 1000}k`;
      }
    }
  },
  listener: {
    draw(data) {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 30px'
        });
      }
    }
  }
};

export default BarChartStackedBar;
