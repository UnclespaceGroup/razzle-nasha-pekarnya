// packages
import useDevice from 'hooks/useDevice'

const DesktopOnly = ({ children }) => {
  const { isSmall } = useDevice()
  return isSmall ? '' : children
}
export default DesktopOnly
