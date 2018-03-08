import React from 'react'
import cx from 'classnames'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './modal.scss'
import ModalContent from './modal-content'


const appearTimeout = 500

class Modal extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(this.props.open!==nextProps.open) {
      if(nextProps.open && this.props.onModalAppear) {
        setTimeout(this.props.onModalAppear, appearTimeout)
      }
    }
  }

  render() {
    return (
      <div aria-live="assertive">
        <CSSTransitionGroup
          component="div"
          transitionName="modal"
          transitionAppear={true}
          transitionAppearTimeout={appearTimeout}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.props.open && <ModalContent>{this.props.children}</ModalContent>}
        </CSSTransitionGroup>
      </div>
    );
  }
}

Modal.defaultProps = {
  open: false
}

export default withStyles(s)(Modal)
