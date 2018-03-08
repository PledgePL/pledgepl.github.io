import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './modal-content.scss'

class ModalContent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.onUpdate)
      window.addEventListener("scroll", this.onUpdate)
    }
    this.onUpdate();
    if (typeof window !== 'undefined') {
      this.setState({ scrollY: window.scrollY })
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.onUpdate);
      window.removeEventListener("scroll", this.onUpdate);
    }
  }

  onUpdate = () => {
    this.setState({ scrollY: window.scrollY })
  }

  render() {
    const style = {
      top: this.state.scrollY
    }

    return (
      <div className="m-modal" style={style}>
        <div className="m-modal__inner">
          <div className="m-modal__inner__dialog">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(ModalContent)
