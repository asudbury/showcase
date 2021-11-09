let seq = 0;
const delays = 80;
const durations = 500;

const LineChartAdvancedSmilAnimations = {
  title: 'Line Chart - Advanced Smil Animations',
  type: 'Line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
  },
  options: {},
  listener: {
    created() {
      seq = 0;
    },
    draw(data) {
      seq += 1;

      if (data.type === 'line') {
        data.element.animate({
          opacity: {
            begin: seq * delays + 1000,
            dur: durations,
            from: 0,
            to: 1
          }
        });
      } else if (data.type === 'label' && data.axis === 'x') {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'label' && data.axis === 'y') {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'grid') {
        const pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[`${data.axis.units.pos}1`] - 30,
          to: data[`${data.axis.units.pos}1`],
          easing: 'easeOutQuart'
        };

        const pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: data[`${data.axis.units.pos}2`] - 100,
          to: data[`${data.axis.units.pos}2`],
          easing: 'easeOutQuart'
        };

        const animations = {};
        animations[`${data.axis.units.pos}1`] = pos1Animation;
        animations[`${data.axis.units.pos}2`] = pos2Animation;
        animations.opacity = {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        };

        data.element.animate(animations);
      }
    }
  }
};

export default LineChartAdvancedSmilAnimations;
