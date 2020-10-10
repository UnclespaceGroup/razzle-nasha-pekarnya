// packages
import React from 'react'
import css from './pageOrderForm.module.scss'
import usePageOrderForm from 'containers/PageOrderForm/usePageOrderForm'
import Header from 'containers/Header/Header'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import BackLink from 'components/BackLink/BackLink'
import { Field, Form } from 'react-final-form'
import Button from 'components/Button/Button'
import Attention from 'components/Attention/Attention'
import CheckBox from 'components/CheckBox/CheckBox'
import TextArea from 'components/TextArea/TextArea'
import useDevice from 'hooks/useDevice'
import useMeta from 'api/hooks/useMeta'
import Helmet from 'components/Helmet/Helmet'

const PageOrderForm = () => {
  const { form: formMeta } = useMeta()
  const { onSubmit, formData, price } = usePageOrderForm()
  const { currentDevice } = useDevice()

  return (
    <Form
      onSubmit={onSubmit}
      name='order-form'
      render={({ handleSubmit, submitFailed, valid, ...props }) => (
        <div className={css[currentDevice]}>
          <Header />
          <Helmet {...formMeta} />
          <Container className={css.container}>
            <BackLink />
            <div className={css.title}>Сделай заказ прямо сейчас</div>
            <div className={css.fieldName}>
              <Field
                component={Input}
                {...formData.name}
              />
            </div>
            <div className={css.subtitle}>Адрес доставки</div>
            <ul className={css.rowFields}>
              <li className={css.bigField}>
                <Field
                  component={Input}
                  {...formData.street}
                />
              </li>
              <li className={css.field}>
                <Field
                  component={Input}
                  {...formData.house}
                />
              </li>
              <li className={css.field}>
                <Field
                  component={Input}
                  {...formData.frontDoor}
                />
              </li>
              <li className={css.field}>
                <Field
                  component={Input}
                  {...formData.floor}
                />
              </li>
              <li className={css.field}>
                <Field
                  component={Input}
                  {...formData.flat}
                />
              </li>
            </ul>
            <Field
              className={css.textArea}
              component={TextArea}
              {...formData.textarea}
            />
            <Field component={CheckBox} {...formData.agree} />
            <div className={css.footer}>
              <Button height={64} variant='black' type='submit' onClick={handleSubmit}>
                Заказать
              </Button>
              <span className={css.price}>{price}.00 р</span>
            </div>
            {(submitFailed && !valid) && <Attention text='Заполните обязательные формы' variant='danger' />}
          </Container>
        </div>
      )}
    />
  )
}
export default React.memo(PageOrderForm)
