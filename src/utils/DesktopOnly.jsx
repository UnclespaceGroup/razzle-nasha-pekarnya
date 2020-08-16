// packages
import useDevice from 'hooks/useDevice'

const DesktopOnly = ({ children }) => {
  const { isSmall } = useDevice()
  console.log(isSmall)
  return isSmall ? '' : children
}
export default DesktopOnly
