import { render } from 'preact'

import App from './app/app'

document.addEventListener('DOMContentLoaded', function() {
  render(<App />, document.body)
})
