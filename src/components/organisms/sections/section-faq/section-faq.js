import React, { Component } from 'react'
import marked from 'marked'
import s from './section-faq.scss'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import FAQGroupLayout from '../../../molecules/layouts/faq-group-layout/faq-group-layout'
import Accordian from '../../../molecules/accordian/accordian'
import AccordianItem from '../../../molecules/accordian-item/accordian-item'

const renderAccordian = (questions) => {
  questions = Array.isArray(questions) ? questions : [questions]
  const items = questions && questions.map(question => (
    <AccordianItem
      key={question.sys.id}
      id={question.sys.id}
      title={question.fields.question}
      dangerouslySetInnerHTML={{ __html: marked(question.fields.answer) }}
    />
  ))
  return <Accordian>{items}</Accordian>
}

const SectionFAQ = (props) =>  {
  const faq = props.faq || null
  const categories = (faq.faqCategories)
                    ? Array.isArray(faq.faqCategories) ? faq.faqCategories : [faq.faqCategories]
                    : null
  return (
    <section className="section-faq">
      <div className="section-faq__content">
        {faq.title && <div className="section-faq__content__title">
          <h2 className="text-size-1">{faq.title}</h2>
        </div>}
        {categories && categories.map(category => (
          <div className="section-faq__content__item" key={category.sys.id}>
            <FAQGroupLayout title={category.fields.name}>
              {renderAccordian(category.fields.questions)}
            </FAQGroupLayout>
          </div>
        ))}
      </div>
    </section>
  )
}

export default withStyles(s)(SectionFAQ)
