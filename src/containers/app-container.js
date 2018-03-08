import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { fetchThing } from '../actions/contentful'
import TemplateApp from '../components/templates/template-app/template-app'

@provideHooks({
  fetch: ({ dispatch, query, body }) =>
    dispatch(fetchThing(query.preview, query.accessToken, query.spaceId, body)
  )
})
class AppContainer extends React.Component {
  render() {
    if (!this.props.loaded) return null
    return <TemplateApp {...this.props}>{this.props.children}</TemplateApp>
  }
}

AppContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    loaded: state.contentful.data !== null,
    nextLocation: state.routing.locationBeforeTransitions,
    loading: state.ui.loading
  }
}

export default connect(mapStateToProps)(AppContainer)
