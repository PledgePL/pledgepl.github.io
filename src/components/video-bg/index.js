import React from 'react'
import Img from 'gatsby-image'
import { CoreBox } from '../core-box'

const VideoBG = ({ bg, loop }) => {
  return (
    <CoreBox css={{ position: 'relative' }}>
      {bg && (
        <Img
          fluid={bg}
          fadeIn={false}
          critical={true}
          style={{
            maxHeight: '100%',
          }}
          imgStyle={{
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
        />
      )}
      {loop && <video src={loop} autoPlay muted />}
    </CoreBox>
  )
}

VideoBG.defaultProps = {
  bg: null,
  loop: null,
}

export default VideoBG
