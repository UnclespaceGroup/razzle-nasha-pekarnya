import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_META from 'api/fetch/FETCH_META'

const useMeta = () => {
  const {
    response
  } = useRemoteData(FETCH_META, [])

  return {
    ...response
  }
}
export default useMeta
