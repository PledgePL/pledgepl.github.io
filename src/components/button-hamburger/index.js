import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@rebass/grid'

const Button = styled(Box)`
  display: block;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  height: 30px;
  width: 36px;
  background-color: transparent;
  background-image: ${({ active }) =>
    `linear-gradient(to bottom, rgba(255, 255, 255, 0) 12px,${
      active ? 'rgba(255, 255, 255, 0)' : 'white'
    } 12px,${
      active ? 'rgba(255, 255, 255, 0)' : 'white'
    } 18px,rgba(255, 255, 255, 0) 18px)`};
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: inherit;
    height: 6px;
    background-color: ${props => props.theme.colors.beta};
    transition: transform 0.3s ease-out;
  }

  &:before {
    transform-origin: 50% 12px;
    top: 0px;
    transform: rotate(${({ active }) => (active ? 45 : 0)}deg)
      ${({ active }) => active && 'translate(0px, 12px)'};
  }

  &:after {
    transform-origin: 50% -18px;
    top: 24px;
    transform: rotate(${({ active }) => (active ? -45 : 0)}deg)
      ${({ active }) => active && 'translate(-7px, -16px)'};
  }
`

const ButtonHamburger = props => {
  return <Button as="button" {...props} />
}

ButtonHamburger.defaultProps = {
  active: false,
}

export default ButtonHamburger
