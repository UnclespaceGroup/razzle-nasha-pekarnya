import { apiUrl } from 'api/axios/instance'

// Получить путь к картинке с апи, если объект, иначе просто картинку
export default function getImgName (img) {
  if (!img) return ''

  return typeof img === 'object'
    ? apiUrl + img?.url
    : apiUrl + img
}
