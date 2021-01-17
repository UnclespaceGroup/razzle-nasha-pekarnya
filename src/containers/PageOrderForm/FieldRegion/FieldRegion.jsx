// packages
import React, { useMemo, useEffect } from 'react'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_REGIONS from 'api/fetch/FETCH_REGIONS'
import { useField } from 'react-final-form'
import Select from 'components/Select/Select'
import _ from 'lodash'
import { getFullPrice } from 'utils/priceUtils'
import { useSelector } from 'react-redux'

const FieldRegion = () => {
  const basket = useSelector(state => state.basket)
  const price = useMemo(() => getFullPrice(basket), [basket])

  const {
    response: regions
  } = useRemoteData(FETCH_REGIONS, [])

  const options = useMemo(() => _.map(regions, item => ({
    value: item.title,
    label: item.title
  })), [regions])

  const initialValue = options?.[0]?.value

  const regionField = useField('region', { initialValue })
  const { input: deliveryInput } = useField('delivery')

  useEffect(() => {
    const {
      deliveryPrice,
      freeFrom
    } = _.find(regions, item => item.title === regionField.input.value) || {}

    // Если цена больше положенной, то доставка бесплатна
    const _newDeliveryValue = (+price > freeFrom) ? 0 : deliveryPrice

    deliveryInput.onChange(_newDeliveryValue)
  }, [regionField.input.value])

  return (
    <Select
      options={options}
      {...regionField}
      label='Район'
    />
  )
}
export default FieldRegion
