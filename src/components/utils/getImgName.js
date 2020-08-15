export default function getImgName (img) {
  if (!img) return ''
  const severUrl = process.env.RAZZLE_API_URL
  return typeof img === 'object'
    ? severUrl + img?.url
    : severUrl + img
}
