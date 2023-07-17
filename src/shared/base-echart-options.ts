import {px} from './px';

export const baseEchartOptions = {

  textStyle: {
    fontSize: px(12),
    color: '#e8e8e8'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(20),
    y: px(20),
    x2: px(20),
    y2: px(20),
    containLabel: true
  },
};