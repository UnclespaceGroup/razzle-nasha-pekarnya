export const isBrowser = typeof window !== 'undefined'
export const isServer = !isBrowser
export const isSSR = process.env.REACT_APP_SSR === 'true'
export const isDevelopment = process.env.NODE_ENV === 'development'

export const getCategoryScrollId = id => `scroll_category_id_${id}`

export const getServerUrl = () =>
  process.env.REACT_APP_MODE === 'production'
    ? process.env.REACT_APP_PRODUCTION_SERVER_URL
    : process.env.REACT_APP_SERVER_URL
