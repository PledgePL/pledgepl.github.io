import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './text-block-legal.scss'

const TextBlockLegal = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="text-block-legal">
      <p className="text-size-11 text-size-11--trailer-1">
        Pledge Parental Leave [PPL] exists to encourage companies in the
        creative industries in the United States to guarantee their
        employees a meaningful minimum standard of parental leave benefits.
      </p>
      <p className="text-size-11 text-size-11--trailer-1">
        &copy; {currentYear} Pledge Parental Leave
        <span aria-hidden="true">&nbsp;|&nbsp;</span>
        <a
          href="https://www.iubenda.com/privacy-policy/322454"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  )
}

export default withStyles(s)(TextBlockLegal)
