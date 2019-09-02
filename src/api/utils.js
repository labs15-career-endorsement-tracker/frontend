export const configureBaseUrl = (stage, localApiPort = 5000) => {
  let baseUrl = ""

  switch (stage) {
    case "production":
      baseUrl += "https://endrsd-api.herokuapp.com"
      break

    case "staging":
      baseUrl += "https://endrsd-api-staging.herokuapp.com"
      break

    default:
      baseUrl += `http://localhost:${localApiPort}`
  }

  return baseUrl + "/api/v0/"
}
