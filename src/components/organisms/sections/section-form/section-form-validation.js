const validate = (values) => {
  const errors = {}

  if (!values.FULLNAME || values.FULLNAME.trim() === '') {
    errors.FULLNAME = 'Required'
  }

  if (!values.JOBTITLE || values.JOBTITLE.trim() === '') {
    errors.JOBTITLE = 'Required'
  }

  if (!values.COMPANY || values.COMPANY.trim() === '') {
    errors.COMPANY = 'Required'
  }

  if (!values.EMAIL || values.EMAIL.trim() === '') {
    errors.EMAIL = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.EMAIL)) {
    errors.EMAIL = 'Invalid email address'
  }

  if (!values.CONTROL) {
    errors.CONTROL = 'Required'
  }
  if (!values.BENEFITS) {
    errors.BENEFITS = 'Required'
  }

  if (!values.INDUSTRY) {
    errors.INDUSTRY = 'Required'
  }

  if (values.INDUSTRY === 'Other' && (!values.INDUSTRY_O || values.INDUSTRY_O.trim() === '')) {
    errors.INDUSTRY_O = 'Required'
  }

  return errors
}

export default validate
