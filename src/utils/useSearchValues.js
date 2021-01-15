// packages
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

// Parsed date from search params
const useSearchValues = () => {
  const { search } = useLocation()

  return useMemo(() => qs.parse(search, { ignoreQueryPrefix: true }), [search])
}

export default useSearchValues
