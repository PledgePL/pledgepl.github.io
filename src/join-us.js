import React                from 'react';
import FormTemplateContainer  from './containers/template-form-container'
import DocumentTitle        from 'react-document-title'

class JoinUs extends React.Component {
  render() {
    return (
      <DocumentTitle title="Pledge Parental Leave: Join Us">
        <FormTemplateContainer />
      </DocumentTitle>
    )
  }
}

export default JoinUs
