import React from 'react'
import styled from '@emotion/styled'
import { CoreBox } from '../core-box'

const AspectRatioBox = styled(CoreBox)(
  `
    height: 0;
    overflow: hidden;
    position: relative;
    flex: 1 1 auto;
    `
)

const AspectRatioBoxInner = styled(CoreBox)(
  `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    `
)

const AspectRatio = ({ ratio, children, css = {}, ...props }) => {
  return (
    <AspectRatioBox {...props} css={{ ...css, paddingTop: `calc(${ratio} * 100%)` }}>
      <AspectRatioBoxInner>{children}</AspectRatioBoxInner>
    </AspectRatioBox>
  )
}

AspectRatio.defaultProps = {
  ratio: 1,
  children: null,
}

export default AspectRatio
