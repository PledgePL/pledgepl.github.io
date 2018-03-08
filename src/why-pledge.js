import React from 'react';
import WhyPledgeContainer from './containers/why-pledge-container'
import DocumentTitle from 'react-document-title'

class WhyPledge extends React.Component {
  render() {
    return (
      <DocumentTitle title="Pledge Parental Leave: Our Partners">
        <WhyPledgeContainer />
      </DocumentTitle>
    )
  }
}

export default WhyPledge
