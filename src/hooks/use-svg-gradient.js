import { useState, useEffect } from "react"
import uuid from "uuid/v4"

const createLinearGradientSvg = (namespace, id, startColor, endColor) => {
  const $defs = document.createElementNS(namespace, "defs")
  const $linearGradient = document.createElementNS(namespace, "linearGradient")
  const $stop1 = document.createElementNS(namespace, "stop")
  const $stop2 = document.createElementNS(namespace, "stop")

  $linearGradient.setAttribute("id", id)
  $linearGradient.setAttribute("gradientTransform", "rotate(90)")

  $stop1.setAttribute("offset", "0%")
  $stop1.setAttribute("stop-color", startColor)

  $stop2.setAttribute("offset", "100%")
  $stop2.setAttribute("stop-color", endColor)

  $linearGradient.appendChild($stop1)
  $linearGradient.appendChild($stop2)

  $defs.appendChild($linearGradient)

  return $defs
}

const useSvgGradient = (svgClassName, startColor, endColor) => {
  const [cssId] = useState(() =>
    uuid()
      .replace(/-/g, "")
      .replace(/\d/g, "")
  )

  useEffect(() => {
    if (document.querySelector(`.${svgClassName} #${cssId}`)) return

    const $svg = document.querySelector(`.${svgClassName}`)
    const $defs = createLinearGradientSvg(
      $svg.namespaceURI,
      cssId,
      startColor,
      endColor
    )

    $svg.prepend($defs)

    return () => {
      $defs.remove()
    }
  }, [cssId, startColor, endColor, svgClassName])

  return cssId
}

export default useSvgGradient
