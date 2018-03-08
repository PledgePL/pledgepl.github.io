import React                from 'react';
import PartnersContainer    from './containers/partners-container'
import DocumentTitle        from 'react-document-title'

class Partners extends React.Component {
  render() {
    return (
      <DocumentTitle title='Pledge Parental Leave: Our Partners'>
        <PartnersContainer />
      </DocumentTitle>
    );
  }
};

export default Partners;
