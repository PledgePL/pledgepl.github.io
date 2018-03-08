import React                from 'react'
import DocumentTitle        from 'react-document-title'
import HomeContainer from './containers/home-container'

class Home extends React.Component {
  render() {
    return (
      <DocumentTitle
        title="Pledge Parental Leave: Four simple requirements. One monumental statement."
      >
        <HomeContainer />
      </DocumentTitle>
    )
  }
}

export default Home
