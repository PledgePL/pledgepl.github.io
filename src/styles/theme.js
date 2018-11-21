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
  eta: 16.0,
  theta: [10.66653, 14.222],
  iota: 12.642,
  kappa: 11.237,
  lamda: 9.989,
}

const fontSizeToLineHeight = (modularScaleValue) => {

  return [].concat(modularScaleValue).map(value => {
    const lines = Math.floor((value / baseFontSize) * lineHeightRatio * 2 ) / 2;
    return pxToRem(lines * baseFontSize)
  })

}


const theme = {
  bgColor1: '#f0f5fa',
  bgColor2: '#989cd7',
  textColor1: '#6b7074',
  textColor2: '#fff',
  textSizeAlpha: pxToRem(modularScale.alpha),
  textSizeBeta: pxToRem(modularScale.beta),
  textSizeGamma: pxToRem(modularScale.gamma),
  lineHeightAlpha: fontSizeToLineHeight(modularScale.alpha),
  lineHeightBeta: fontSizeToLineHeight(modularScale.beta),
  lineHeightGamma: fontSizeToLineHeight(modularScale.gamma)
}

export default theme
