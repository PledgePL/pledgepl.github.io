import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { createResponsiveConnect } from 'react-matchmedia-connect'
import s from './header.scss'
import NavigationMain from '../../molecules/navigation-main/navigation-main'
import CTAButton from '../../atoms/buttons/cta-button/cta-button'
import HamburgerButton from '../../atoms/buttons/hamburger-button/hamburger-button'
import LogoButton from '../../atoms/buttons/logo-button/logo-button'
import { BREAKPOINTS } from '../../../config'

class Header extends Component {

  constructor(props) {
    super(props)
    this.nav = null
    this.state = {
      open: false,
      pathname: ''
    }
  }

  componentDidMount() {
    this.setState({ pathname: window.location.pathname })
    window.addEventListener('resize', this.reset);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reset);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname !== this.props.pathname) {
      this.setState({ open: false })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.open !== nextState.open && this.props.onNavChange) {
      this.props.onNavChange(nextState.open)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open !== prevState.open && this.state.open) {
      this.nav.focus()
    }
  }

  onHamburgerClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  reset = () => {
    this.setState({
      open: false
    })
  }

  render() {

    const classNames = {
      'header': true,
      'header--open': this.state.open,
      'header--loading': this.props.loading
    }

    return (
      <header className={cx(classNames)}>
        <div className="header__content">
          <div className="header__content__logo">
            <LogoButton to="/" />
          </div>
          <div className={`
            header__content__secondary-nav
            xs-u-block
            xs-u-text-align-right
          md-u-hide`}>
            <HamburgerButton
              onClick={this.onHamburgerClick}
              active={this.state.open}
              role="button"
              aria-haspopup="true"
              aria-expanded={this.state.open}
              aria-label="Toggle Menu"
              aria-controls="main-nav"
            />
          </div>
          <div className="header__content__main-nav" id="main-nav">
            <NavigationMain
              activePathName={this.props.pathname}
              hidden={!this.state.open}
              onMount={(nav) => { this.nav = nav }}
            />
          </div>
          <div className="header__content__secondary-nav xs-u-hide md-u-flex">
            <CTAButton size="small" to="/join-us/" hidden="true">
              Join Us Today
            </CTAButton>
          </div>
        </div>
      </header>
    )
  }
}

Header.contextTypes = {
	router: PropTypes.object.isRequired
}

const component = ((typeof window !== 'undefined')) ?
  withStyles(s)(createResponsiveConnect(BREAKPOINTS)(['isMinMD'])(Header)) :
  withStyles(s)(Header)

export default component
