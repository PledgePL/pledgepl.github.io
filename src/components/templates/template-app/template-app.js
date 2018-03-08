import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import LoadingBar from 'react-redux-loading-bar'
import get from 'lodash.get'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Header from '../../organisms/header/header'
import s from './template-app.scss'

class TemplateApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      navOpen: false
    }
    this.scrollTimeout = null
    this.loadingTimeout = null
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.loading && !this.props.loading) {
      this.loadingTimeout = setTimeout(() => {
        this.setState({ loading: true })
      }, 500)
    }

    if (!nextProps.loading) {
      clearTimeout(this.loadingTimeout)
      if (nextState.loading) {
        this.setState({ loading: false })
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // scroll to top on router change
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const h = this.props.location.hash.replace("#", "")
      clearTimeout(this.scrollTimeout)
      this.scrollTimeout = setTimeout(() => {
        document.body.scrollTop = 0
      }, 400)
      if (h !== "") {
        setTimeout(() => {
          const top = document.getElementById(h).offsetTop - 350
          document.body.scrollTop = top
        }, 650)
      }
    }
  }

  onNavChange = (open) => {
    this.setState({
      navOpen: open
    })
  }

  render() {

    const pathname = get(this.props, 'location.pathname', null)
    const isJoinUs = this.context.router.isActive({ pathname: '/join-us/' })
    const partial = this.props.children

    return (
      <div className="template-app">

        <div className="template-app__header">
          <Header
            loading={this.state.loading}
            joinPage={isJoinUs}
            pathname={pathname}
            onNavChange={this.onNavChange}
          />
        </div>

        <div className="template-app__loading">
          <LoadingBar className="template-app__loading__bar" />
        </div>

        <div className="template-app__body" hidden={this.state.navOpen}>
          <ReactCSSTransitionGroup
            component="div"
            className="template-app__body__transition"
            transitionName="example"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}>
              <div className="template-app__body__transition__child" key={pathname}>
                {partial}
              </div>
          </ReactCSSTransitionGroup>
        </div>

      </div>
    )
  }
}

TemplateApp.contextTypes = {
  router: PropTypes.object.isRequired,
  location: PropTypes.object,
  children: PropTypes.object
}

export default withStyles(s)(TemplateApp)
