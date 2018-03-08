import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import url from 'url'
import { createResponsiveConnect } from 'react-matchmedia-connect'
import s from './navigation-main.scss'
import MenuButton from '../../atoms/buttons/menu-button/menu-button'
import { BREAKPOINTS } from '../../../config'

const uri = {
  HOME: url.parse('/'),
  WHY_PLEDGE: url.parse('why-pledge/'),
  PARTNERS: url.parse('partners/'),
  SUPPORT: url.parse('support/'),
  JOIN_US: url.parse('join-us/')
}

class NavigationMain extends Component {

  constructor(props) {
    super(props)
    this.navEl = null
  }

  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount(this)
    }
  }

  focus = () => {
    if (typeof document !== 'undefined') {
      const focusElements = document
                              .querySelector('.navigation-main')
                              .querySelectorAll('a, button')
      if (focusElements.length > 0) focusElements[0].focus()
    }
  }

  render() {
    const parsedActivePathName = (this.props.activePathName)
      ? url.parse(this.props.activePathName)
      : null

    const isHome = parsedActivePathName
      ? (parsedActivePathName.pathname === uri.HOME.pathname)
      : this.context.router.isActive({ pathname: uri.HOME.pathname }, true)
    const isWhyPledge = parsedActivePathName
      ? (parsedActivePathName.pathname === uri.WHY_PLEDGE.pathname)
      : this.context.router.isActive({ pathname: uri.WHY_PLEDGE.pathname }, true)
    const isPartners = parsedActivePathName
      ? (parsedActivePathName.pathname === uri.PARTNERS.pathname)
      : this.context.router.isActive({ pathname: uri.PARTNERS.pathname }, true)
    const isSupport = parsedActivePathName
      ? (parsedActivePathName.pathname === uri.SUPPORT.pathname)
      : this.context.router.isActive({ pathname: uri.SUPPORT.pathname }, true)
    const isJoinUs = parsedActivePathName
      ? (parsedActivePathName.pathname === uri.JOIN_US.pathname)
      : this.context.router.isActive({ pathname: uri.JOIN_US.pathname }, true)

    return (<nav className="navigation-main" hidden={this.props.hidden} ref={el => this.navEl = el}>
      <div className="navigation-main__item xs-u-block md-u-visually-hidden">
        <MenuButton to='/' active={isHome} title="Home" tabIndex={this.props.isMinMD ? -1 : 0}>Home</MenuButton>
      </div>
      <div className="navigation-main__item">
        <MenuButton to='/why-pledge/' active={isWhyPledge} title="Why Pledge">Why Pledge</MenuButton>
      </div>
      <div className="navigation-main__item">
        <MenuButton to='/partners/' active={isPartners} title="Our Partners">Our Partners</MenuButton>
      </div>
      <div className="navigation-main__item">
        <MenuButton to='/support/' active={isSupport} title="Support">Support</MenuButton>
      </div>
      <div className="navigation-main__item xs-u-block md-u-visually-hidden">
        <MenuButton to='/join-us/' active={isJoinUs} title="Join Us" tabIndex={this.props.isMinMD ? -1 : 0}>Join Us</MenuButton>
      </div>
    </nav>)
  }
}

NavigationMain.contextTypes = {
  router: PropTypes.object.isRequired
}

NavigationMain.propTypes = {
  activePathName: PropTypes.string,
  hidden: PropTypes.bool,
  onMount: PropTypes.func
}

NavigationMain.defaultProps = {
  hidden: false,
  isMinMD: false,
  onMount: null
}

const component = ((typeof window !== 'undefined')) ?
  withStyles(s)(createResponsiveConnect(BREAKPOINTS)(['isMinMD'])(NavigationMain)) :
  withStyles(s)(NavigationMain)

export default component
