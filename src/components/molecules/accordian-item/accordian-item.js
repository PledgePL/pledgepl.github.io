import React from 'react'
import cx from 'classnames'
import throttle from 'lodash.throttle'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './accordian-item.scss'
import AccordianButton from '../../atoms/buttons/accordian-button/accordian-button'

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

class AccordianItem extends React.Component {

  constructor(props) {
    super(props)
    this.bodyMeasure = null
    this.resizeThrottle = throttle(this.onResize, 100)
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.resizeThrottle, false);
    }

    if (typeof window != 'undefined' && window.document) {
      const h = document.location.hash.replace("#", "")
      if (h === slugify(this.props.title)) {
        if (this.props.onSelected) this.props.onSelected()
      }
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.resizeThrottle);
    }
  }

  onTitleClick = (e) => {
    e.preventDefault()
    if (this.props.onSelected) this.props.onSelected()
    return false
  }

  onResize = () => this.forceUpdate()

  render() {

    const classNames = {
      'accordian-item': true,
      'accordian-item--open': this.props.isOpen
    }

    return (
      <details
        className={cx(classNames)}
        open={this.props.isOpen}
        onClick={this.onTitleClick}>
        <summary
          className="accordian-item__title"
          tabindex="-1">
          <AccordianButton
            active={this.props.isOpen}
          >
            {this.props.title}
          </AccordianButton>
        </summary>
        <div className="accordian-item__body">
          {
            this.props.dangerouslySetInnerHTML &&
              <div
                className="accordian-item__body__measure"
                ref={(c) => { this.bodyMeasure = c }}
                dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}
              />
          }
          {
            this.props.children &&
              <div
                className="accordian-item__body__measure"
                ref={(c) => { this.bodyMeasure = c }}
              >
                {this.props.children}
              </div>
          }
          <a name={slugify(this.props.title)} id={slugify(this.props.title)}></a>
        </div>
      </details>
    )
  }
}

AccordianItem.defaultProps = {
  isOpen: false
}

export default withStyles(s)(AccordianItem)
