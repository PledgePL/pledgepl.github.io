import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './accordian.scss'

class Accordian extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: -1
    }
  }

  onSelectedChange = (index) => {
    this.setState({
      selectedIndex: (index !== this.state.selectedIndex) ? index : -1
    })
  }

  render() {
    // enhance the section contents so we can track clicks and show sections
    const children = React.Children.map(this.props.children, (child, index) => {
      return (
        <div className="accordian__item">
          {
            React.cloneElement(child, {
              index,
              isOpen: (this.state.selectedIndex === index),
              onSelected: () => this.onSelectedChange(index)
            })
          }
        </div>
      )
    })

    return (
      <div className="accordian">
        {children}
      </div>
    )
  }
}

export default withStyles(s)(Accordian)
