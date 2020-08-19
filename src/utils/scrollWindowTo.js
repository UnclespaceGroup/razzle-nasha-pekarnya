export const scrollWindowTo = (id) => {
  if (typeof window === 'undefined' || !id) {
    return null
  }
  const element = document.getElementById(id)
  if (!element) return
  const bodyRect = document.body.getBoundingClientRect()
  const rect = element.getBoundingClientRect()
  const offset = rect.top - bodyRect.top

  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style

  if (supportsNativeSmoothScroll) {
    window.scrollTo({
      top: offset - 100,
      behavior: 'smooth'
    })
  } else {
    window.scrollTo(0, offset)
  }
}
