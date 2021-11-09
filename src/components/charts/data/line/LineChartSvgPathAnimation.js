import Chartist from 'chartist';

const LineChartSvgPathAnimation = {
  title: 'Line Chart - SVG Path Animation',
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [
      [1, 5, 2, 5, 4, 3],
      [2, 3, 4, 8, 1, 2],
      [5, 4, 3, 2, 1, 0.5]
    ]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
  },
  listener: {
    draw(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    }
  }
};

export default LineChartSvgPathAnimation;
