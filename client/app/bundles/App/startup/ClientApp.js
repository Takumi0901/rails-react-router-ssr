import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/ConfigureStore'

import {
  BrowserRouter as Router
} from 'react-router-dom'

import routes from './routes'

export default (props, railsContext) => (
  <Provider store={configureStore(props)}>
    <Router>
      {routes}
    </Router>
  </Provider>
)