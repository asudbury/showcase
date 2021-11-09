import Chartist from 'chartist';

const PieChartAnimatedDonut = {
  title: 'Pie Chart - Animated Donut',
  type: 'Pie',
  data: {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  },
  options: {
    donut: true,
    showLabel: false
  },
  listener: {
    draw(data) {
      if (data.type === 'slice') {
        // eslint-disable-next-line no-underscore-dangle
        const pathLength = data.element._node.getTotalLength();

        data.element.attr({
          'stroke-dasharray': `${pathLength}px ${pathLength}px`
        });

        const animationDefinition = {
          'stroke-dashoffset': {
            id: `anim${data.index}`,
            dur: 1000,
            from: `${-pathLength}px`,
            to: '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,

            fill: 'freeze'
          }
        };

        if (data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin = `anim${
            data.index - 1
          }.end`;
        }

        data.element.attr({
          'stroke-dashoffset': `${-pathLength}px`
        });

        data.element.animate(animationDefinition, false);
      }
    }
  }
};

export default PieChartAnimatedDonut;
