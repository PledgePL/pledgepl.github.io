import facepaint from 'facepaint'

export const baseFontSize = 16
const breakpoints = [576, 768, 992, 1200]
const lineHeightRatio = 1.5

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const pxToRem = (value) => {
  if(Array.isArray(value)) {
    return value.map(_ => pxToRem(_))
  }
  return `${value / baseFontSize}rem`
}

const modularScale = {
  xxl: 46.184,
  xl: 41.053,
  alpha: [24.32772, 32.437],
  beta: 28.833,
  gamma: 25.629,
  delta: 22.781,
  epsilon: 20.25,
  zeta: 18.0,
  eta: [12.0, 16.0],
  theta: [10.66653, 14.222],
  iota: [9.4815, 12.642],
  kappa: 11.237,
  lamda: 9.989,
}

const linesToRem = (lines) => pxToRem(lines * baseFontSize)

const fontSizeToLineHeight = (modularScaleValue) => {
  return [].concat(modularScaleValue).map(value => {
    const lines = Math.floor((value / baseFontSize) * lineHeightRatio * 2 ) / 2;
    return linesToRem(lines)
  })
}

const theme = {
  space: [ 0, 4, 8, 16, 32, 64, 128, 256 ],
  breakpoints: [ '576px', '768px', '992px', '1200px' ],

  fonts: {
    alpha: '"Roboto",Arial,Helvetica,sans-serif',
    beta: '"Roboto Slab",Gerogia,serif'
  },
  

  fontSizes: {
    alpha: [24.32772, 32.437],
    eta: [12, 16],
    theta: [10.66653, 14.222],
    iota: [9.4815, 12.642],
  },

  fontWeights: {
    alpha: '400'
  },

  colors: {
    alpha: '#6b7074',
    beta: '#fff'
  },

  spacingUnit1: [4, 6],
  spacingUnit2: [8, 12],
  spacingUnit3: [12, 18],
  spacingUnit4: [16, 24],
  spacingUnit5: [20, 30],
  spacingUnit6: [24, 36],
  bgColor1: '#f0f5fa',
  bgColor2: '#989cd7',
  bgColor3: '#6ac3c1',
  bgColor3Active: '#83cecc',
  textColor1: '#6b7074',
  textColor2: '#fff',
  textSizeAlpha: pxToRem(modularScale.alpha),
  textSizeBeta: pxToRem(modularScale.beta),
  textSizeGamma: pxToRem(modularScale.gamma),
  textSizeEta: pxToRem(modularScale.eta),
  textSizeTheta: pxToRem(modularScale.theta),
  textSizeIota: pxToRem(modularScale.iota),
  lineHeightAlpha: fontSizeToLineHeight(modularScale.alpha),
  lineHeightBeta: fontSizeToLineHeight(modularScale.beta),
  lineHeightGamma: fontSizeToLineHeight(modularScale.gamma),
  lineHeightEta: fontSizeToLineHeight(modularScale.eta),
  lineHeightTheta: fontSizeToLineHeight(modularScale.theta),
  lineHeightIota: fontSizeToLineHeight(modularScale.iota),
  fontFamilyPrimary: '"Roboto",Arial,Helvetica,sans-serif',
  fontWeightPrimary: 400,
  fontFamilySecondary: '"Roboto Slab",Gerogia,serif',
  fontWeightSecondary: 400,
}

export default theme
