const defaultParserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
}

const parserOptionsMapper = ({
  code,
  errors,
  options = [],
  parserOptions = {}
}) => ({
  code,
  errors,
  options,
  parserOptions: {
    ...defaultParserOptions,
    ...parserOptions
  }
})

export default parserOptionsMapper
