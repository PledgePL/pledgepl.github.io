import React from 'react'
import VideoBanner from '../../video-banner'

const SectionVideo = ({ src, bg }) => {
  return (
    <VideoBanner
        title="Pledge Parental Leave is setting the standard for paid leave benefits in
        the U.S. creative industry"
        bg={bg}
        loop={src}
    />
  )
}

export default SectionVideo