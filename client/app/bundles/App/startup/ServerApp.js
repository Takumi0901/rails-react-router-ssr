import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import configureStore from '../redux/ConfigureStore'
import routes from './routes'

export default (props, railsContext) => {
  const store = configureStore(props)
  const { location } = railsContext
  const context = {}

  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        {routes}
      </StaticRouter>
    </Provider>
  )
}