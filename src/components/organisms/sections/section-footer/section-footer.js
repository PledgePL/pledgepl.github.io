import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './section-footer.scss'
import IconButton from '../../../atoms/buttons/icon-button/icon-button'
import LogoButton from '../../../atoms/buttons/logo-button/logo-button'
import ContactIconsLayout from '../../../molecules/layouts/contact-icons-layout/contact-icons-layout'
import TextBlockLegal from '../../../molecules/text-blocks/text-block-legal/text-block-legal'

const SectionFooter = () => (
  <footer className="section-footer" role="contentinfo">
    <ul className="section-footer__content">
      <li className="section-footer__content__logo">
        <LogoButton color="purple" size="small">Pledge Parental Leave</LogoButton>
      </li>
      <li className="section-footer__content__legal">
        <TextBlockLegal />
      </li>
      <li className="section-footer__content__contact">
        <ContactIconsLayout>
          <IconButton type="email" href="mailto:team@pledgepl.org" target="_blank">Email</IconButton>
          <IconButton type="twitter" href="https://twitter.com/pledgepl" target="_blank">Twitter</IconButton>
        </ContactIconsLayout>
      </li>
    </ul>
  </footer>)

export default withStyles(s)(SectionFooter)
