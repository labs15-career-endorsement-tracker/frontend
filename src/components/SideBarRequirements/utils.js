export const handleSubmit = () => {
  console.log("firing off")
}

export const formatRequirements = arr => {
  if (!arr || !arr.length) return [{ value: 0, label: "Nothing..." }]
  return arr.map(({ id, title }) => ({
    value: id,
    label: title
  }))
}
