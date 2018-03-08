import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import get from 'lodash.get'
import { Field, reduxForm } from 'redux-form'
import s from './section-form.scss'
import Fieldset from '../../../molecules/fieldset/fieldset'
import BlockGrid from '../../../molecules/block-grid/block-grid'
import InputRadio from '../../../atoms/inputs/input-radio/input-radio'
import InputText from '../../../atoms/inputs/input-text/input-text'
import InputTextInline from '../../../atoms/inputs/input-text-inline/input-text-inline'
import CTAButton from '../../../atoms/buttons/cta-button/cta-button'
import Modal from '../../../molecules/modal/modal'
import validate from './section-form-validation'


const renderInputText = field => (
  <div>
    <InputText
      {...field}
      {...field.input}
      error={(field.meta.touched && field.meta.error) ? field.meta.error : null}
    />
  </div>
)

const renderInputRadio = field => (
  <span>
    <InputRadio
      {...field}
      {...{
        name: field.input.name,
        value: field.input.value,
        checked: field.input.checked,
        onChange: field.input.onChange
      }}
      error={Boolean(field.meta.touched && field.meta.error)}
    >
      {field.children}
    </InputRadio>
  </span>
)

const renderInputRadioText = field => (
  <div>
    <InputTextInline
      {...field}
      {...field.input}
      error={(field.meta.touched && field.meta.error) ? field.meta.error : null}
    />
  </div>
)

const normalizeTrimLeft = value => value.trimLeft()

class SectionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayErrorStart: true,
      displayError: false
    }
  }

  displayErrorTimeout() {
    this.setState({
      displayErrorStart: Math.random()
    })
    setTimeout(() => {
      this.setState({
        displayError: Math.random()
      })
    }, 50)
    setTimeout(() => {
      this.setState({
        displayError: false,
        displayErrorStart: true
      })
    }, 1000)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid, submitFailed, invalid, syncValidationErrors } = this.props

		let modalOpen = false
		let modalPartial = null
    const isDisabled = this.props.modalOpen || submitting;
    const isOtherIndustrySelected = get(this.props, 'values.INDUSTRY', null)


    let globalErrorPartial = null
    if (this.props.error) {
      globalErrorPartial = (
        <p
          className="text-size-7 text-size-7--trailer-0"
          dangerouslySetInnerHTML={{ __html: this.props.error }}
        />
      )
    }

    return (
      <div className="section-form">
        <form className="section-form__content" onSubmit={(e) => {
          this.displayErrorTimeout()
          return handleSubmit(e)
        }} noValidate>
          <div className="section-form__content__fieldset">
            <Fieldset
              legend="Please provide your contact information:"
              role="group"
            >
              <BlockGrid smCols={1} mdCols={2} lgCols={2} gutter={1}>
                <Field
                  name="FULLNAME"
                  component={renderInputText}
                  disabled={isDisabled}
                  placeholder="Name"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  maxLength="100"
                  required="required"
                  normalize={normalizeTrimLeft} />
                <Field
                  name="JOBTITLE"
                  component={renderInputText}
                  disabled={isDisabled}
                  placeholder="Job Title"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  maxLength="100"
                  required="required"
                  normalize={normalizeTrimLeft} />
                <Field
                  name="EMAIL"
                  component={renderInputText}
                  disabled={isDisabled}
                  placeholder="Email"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  maxLength="100"
                  required="required"
                  normalize={normalizeTrimLeft} />
                <Field
                  name="COMPANY"
                  component={renderInputText}
                  disabled={isDisabled}
                  placeholder="Company"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  maxLength="100"
                  required="required"
                  normalize={normalizeTrimLeft}
                />
              </BlockGrid>
            </Fieldset>
          </div>
          <div className="section-form__content__fieldset">
            <Fieldset
              className="section-form__content__fieldset"
              legend="Tell us about yourself:"
              role="radiogroup"
              aria-required="true"
              error={submitFailed && invalid && get(syncValidationErrors, 'CONTROL', false)}
            >
              <Field
                name="CONTROL"
                component={renderInputRadio}
                disabled={isDisabled}
                type="radio"
                value="yes"
                required="required"
              >
                I work in HR and/or control or influence benefits.
              </Field>
              <Field
                name="CONTROL"
                component={renderInputRadio}
                disabled={isDisabled}
                type="radio"
                value="no"
              >
                I don’t control benefits, but want to help change them anyway.
              </Field>
            </Fieldset>
          </div>
          <div className="section-form__content__fieldset">
            <Fieldset
              className="section-form__content__fieldset"
              legend="Tell us about your company&rsquo;s current benefit status:"
              role="radiogroup"
              aria-required="true"
              error={submitFailed && invalid && get(syncValidationErrors, 'BENEFITS', false)}
            >
              <Field name="BENEFITS" component={renderInputRadio} disabled={isDisabled} type="radio" value="meets">My company&rsquo;s parental leave policy meets these standards.</Field>
              <Field name="BENEFITS" component={renderInputRadio} disabled={isDisabled} type="radio" value="wants">I want to help my company meet these standards as soon as possible.</Field>
              <Field name="BENEFITS" component={renderInputRadio} disabled={isDisabled} type="radio" value="awareness">I want to help spread the word &amp; raise awareness about Pledge Parental Leave.</Field>
            </Fieldset>
          </div>
          <div className="section-form__content__fieldset">
            <Fieldset
              className="section-form__content__fieldset"
              legend="Tell us what industry your company is in:"
              description="Pledge Parental Leave is a coalition that focusses solely on the creative industry. Click here to find out more."
              descriptionTo="/support/#why-is-target-focus-on-the-creative-industry"
              role="radiogroup"
              aria-required="true"
              error={submitFailed && invalid && get(syncValidationErrors, 'INDUSTRY', false)}
            >
              <BlockGrid smCols={1} mdCols={2} lgCols={2} gutter={1}>
                <Field name="INDUSTRY" component={renderInputRadio} disabled={isDisabled} type="radio" value="Advertising">Advertising</Field>
                <Field name="INDUSTRY" component={renderInputRadio} disabled={isDisabled} type="radio" value="Architecture">Architecture</Field>
                <Field name="INDUSTRY" component={renderInputRadio} disabled={isDisabled} type="radio" value="Creative Services">Creative Services</Field>
                <Field name="INDUSTRY" component={renderInputRadio} disabled={isDisabled} type="radio" value="Incubator / Accelerator">Incubator / Accelerator</Field>
                <Field name="INDUSTRY" component={renderInputRadio} disabled={isDisabled} type="radio" value="Marketing">Marketing</Field>
                <div className="section-form__inline-radio-text">
                  <div className="section-form__inline-radio-text__radio">
                    <Field name="INDUSTRY" component={renderInputRadio} disabled={isDisabled} type="radio" value="Other">{this.props.industryIsOther ? "" : "Other"}</Field>
                  </div>
                  <div className="section-form__inline-radio-text__text">
                    {this.props.industryIsOther && <Field
                      name="INDUSTRY_O"
                      component={renderInputRadioText}
                      disabled={isDisabled}
                      placeholder="Please enter industry"
                      autoComplete="off"
                      autoCapitalize="off"
                      autoCorrect="off"
                      maxLength="150"
                      normalize={normalizeTrimLeft} />}
                  </div>
                </div>
              </BlockGrid>
            </Fieldset>
          </div>
          <div className="section-form__content__submit">
            <div className="section-form__content__submit__button">
              <CTAButton tagName="button" size="large" loading={submitting}>Submit</CTAButton>
            </div>
            <div
              className="section-form__content__submit__error"
              role="alert"
              id="error"
            >{globalErrorPartial}
            </div>
          </div>

        </form>

        <Modal open={this.props.modalOpen} onModalAppear={this.props.onModalAppear}>
          <h1>Thank you!</h1>
          <p>
            We need to confirm your email address.
            To complete the submission process,
            please click the link in the email we just sent you.
          </p>
        </Modal>

      </div>)
  }
}

export default withStyles(s)(reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'join-us',
  validate
})(SectionForm))
