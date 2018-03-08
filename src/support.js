import React                from 'react';
import SupportContainer    from './containers/support-container'
import DocumentTitle        from 'react-document-title'

class Support extends React.Component {
  render() {
    return (
      <DocumentTitle title='Pledge Parental Leave: Support'>
        <SupportContainer />
      </DocumentTitle>
    );
  }
};

export default Support;
