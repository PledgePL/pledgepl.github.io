export const baseFontSize = 16
const breakpoints = ['768px', '992px', '1200px']
export const lineHeightRatio = 1.5

const theme = {
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128, 256],
  breakpoints,

  fonts: {
    alpha: '"Roboto",Arial,Helvetica,sans-serif',
    beta: '"Roboto Slab",Gerogia,serif',
  },

  fontSizes: {
    xl: [30.75, 41.053],
    alpha: [24.32772, 32.437],
    beta: [19.228, 25.629],
    delta: [17, 22.781],
    epsilon: [16, 20.25],
    eta: [14, 16],
    theta: [14.222],
    iota: [12.642],
    lamda: [9.989],
  },

  lineHeights: {
    xl: [lineHeightRatio],
    alpha: [lineHeightRatio],
    beta: [lineHeightRatio],
    delta: [lineHeightRatio],
    epsilon: [lineHeightRatio],
    eta: [lineHeightRatio],
    theta: [lineHeightRatio],
    iota: [lineHeightRatio],
    lamda: [lineHeightRatio],
  },

  fontWeights: {
    alpha: '400',
  },

  colors: {
    alpha: '#6b7074',
    beta: '#fff',
    gamma: '#989cd7',
    delta: '#6ac3c1',
    epsilon: '#f0f5fa',
    zeta: '#83cecc',
    eta: '#000000',
    theta: '#6b7074',
  }
}

export default theme
