import React from 'react'
import s from './section-join.scss'
import CTAButton from '../../../atoms/buttons/cta-button/cta-button'
import BlockGrid from '../../../molecules/block-grid/block-grid'
import withStyles               from 'isomorphic-style-loader/lib/withStyles'

const SectionJoin = (props) => {
  const monthNames = ['January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December']

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentMonthString = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <div className="section-join">
      <div className="section-join__content">
        <div className="section-join__content__title">
          {props.numEmployees &&
            <p
              aria-label={`${props.numEmployees.toLocaleString()} Employees are covered under Pledge Parental Leave as of ${currentMonthString} ${currentYear}. Is your company ready to make history?`}>
              <span
                className="section-join__content__title__heading text-font--heading xs-text-size-2 xs-text-size-2--trailer-1 sm-text-size-xl sm-text-size-xl--trailer-0">
                {props.numEmployees.toLocaleString()} Employees
              </span>
              <br/>
              <span className="section-join__content__title__content text-font--heading xs-text-size-6 xs-text-size-6--trailer-1 sm-text-size-4 sm-text-size-4--trailer-2">
                are covered under Pledge Parental Leave as of <time dateTime={`${currentYear}-${currentMonth}-01`}>{currentMonthString} {currentYear}</time>. Is your company ready to make history?
              </span>
            </p>
          }

        </div>

        <div className="section-join__content__body">

          <BlockGrid gutter={'0-5'} xsCols={1} smCols={1} mdCols={1} lgCols={1}>
            <CTAButton size="large" to="/join-us/">We&rsquo;re ready to join</CTAButton>
            <CTAButton size="large" modifier="alpha" to="/support/">We have more questions</CTAButton>
          </BlockGrid>

        </div>

      </div>
    </div>
  )
}

SectionJoin.defaultProps = {
  title: null,
  description: null
}

export default withStyles(s)(SectionJoin)
