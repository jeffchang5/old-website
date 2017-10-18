import React from 'react';

const feColorMatrixList = {
  green: <feColorMatrix
    type="matrix"
    values="0.50  0.00  0.00  0.00  0.00
            0.00  0.80  0.00  0.00  0.00
            0.00  0.00  0.50  0.00  0.00
            1.00  0.00  0.00  1.00  0.00"
  />,
  blue: <feColorMatrix
    type="matrix"
    values="0.56  0.00  0.00  0.00  0.00
            0.00  0.79  0.00  0.00  0.00
            0.00  0.00  0.98  0.00  0.00
            0.00  0.00  0.00  1.00  0.00"
  />,
  purple: <feColorMatrix
    type="matrix"
    values="0.40  0.00  0.30  0.00  0.00
            0.00  0.50  0.00  0.00  0.00
            0.00  0.00  0.80  0.00  0.00
            1.00  0.00  0.00  1.00  0.00"
  />,
  orange: <feColorMatrix
    type="matrix"
    values="0.40  0.00  0.30  0.00  0.00
            0.00  0.50  0.00  0.00  0.00
            0.00  0.00  0.80  0.00  0.00
            1.00  0.00  0.00  1.00  0.00"
  />,
  yellow: <feColorMatrix
    type="matrix"
    values="0.98  0.00  0.30  0.00  0.00
            0.00  0.85  0.00  0.00  0.00
            0.00  0.00  0.21  0.00  0.00
            1.00  0.00  0.00  1.00  0.00"
  />,
};

export default {
  android: { name: 'Android', accentColor: '#81c784', filter: feColorMatrixList.green },
  web_dev: { name: 'Web Dev', accentColor: '#26c6da', filter: feColorMatrixList.blue },
  ml: { name: 'Machine Learning', accentColor: '#BA68C8', filter: feColorMatrixList.purple },
  data_science: { name: 'Data Science', accentColor: '#ef6c00', filter: feColorMatrixList.orange },
  ios: { name: 'iOS', accentColor: '#ffea00', filter: feColorMatrixList.yellow },
};
