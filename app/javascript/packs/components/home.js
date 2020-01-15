import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { renderReact } from "hypernova-react"

const Hello = props => (
  <div>This is home page render server with react</div>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
